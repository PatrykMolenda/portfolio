const fs = require('fs');
const path = require('path');
const terser = require('terser');
const JavaScriptObfuscator = require('javascript-obfuscator');

const timeStart = new Date();
const srcDir = path.resolve(__dirname, 'src/js/');
const outDir = path.resolve(__dirname, 'dist');
const outJsMin = path.join(outDir, 'build.min.js');

function getAllJsFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllJsFiles(fullPath, files);
    } else if (file.endsWith('.js')) {
      files.push(fullPath);
    }
  });
  return files;
}

async function bundleAndMinifyJS() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const jsFiles = getAllJsFiles(srcDir);
  if (jsFiles.length === 0) {
    console.warn('[WARNING] No JS files found in src/js/.');
    return;
  }
  const bundleContent = jsFiles.map(file => fs.readFileSync(file, 'utf8')).join('\n');

  const minified = await terser.minify(bundleContent);
  if (minified.error) {
    console.error('[ERROR] Terser minification error:', minified.error);
    return;
  }

  const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
  });
  fs.writeFileSync(outJsMin, obfuscated.getObfuscatedCode(), 'utf8');
  console.log(`[SUCCESS] JS Builded in ${new Date() - timeStart}ms`);
}

bundleAndMinifyJS();