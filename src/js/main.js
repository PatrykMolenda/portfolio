const hideEmail = function (email) {
  return email.replace(/(.{2})(.*)(?=@)/, function (gp1, gp2, gp3) {
    for (let i = 0; i < gp3.length; i++) {
      gp2 += "*";
    }
    return gp2;
  });
};

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const hidePhoneNumber = function (number) {
  let clean = number.replace(/\D/g, "");
  if (clean.length < 5) return number;
  let prefix = clean.slice(0, 3);
  let suffix = clean.slice(-2);
  let masked = "*".repeat(clean.length - 5);
  return prefix + masked + suffix;
};

function animateMatrix(container, target) {
  const totalFrames = 20;
  let frame = 0;

  const interval = setInterval(() => {
    const revealed = Math.floor((frame / totalFrames) * target.length);
    container.textContent = scrambleText(target, revealed);
    frame++;

    if (frame > totalFrames) {
      clearInterval(interval);
      container.textContent = target;
    }
  }, 75);
}


const chars = "AĄBCĆDEĘFGHIJKLŁMNOÓPQRSŚTUVWXYZŻŹ0123456789!@#$%^&*";

function scrambleText(text, progress) {

  return text
    .split("")
    .map((char, i) => {
      if (i < progress) return char.replace(/[^\w\s.,-]/g, '');
      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join("");
}

window.onload = () => {
  const yearElem = document.getElementById("year");
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  const tabs = document.querySelectorAll("#tabs > div");
  const programming = document.getElementById("programming");
  const software = document.getElementById("software");
  const languages = document.getElementById("languages");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active-tab"));
      tab.classList.add("active-tab");
      const activeTab = tab.textContent.trim().toLowerCase();
      if (programming) programming.style.display = activeTab === "programming" ? "flex" : "none";
      if (software) software.style.display = activeTab === "software" ? "flex" : "none";
      if (languages) languages.style.display = activeTab === "languages" ? "flex" : "none";
    });
  });

  if (tabs.length > 0) {
    tabs[0].classList.add("active-tab");
    if (programming) programming.style.display = "grid";
  }

  let base1 = "cGF0cnl";
  let bas2fs = "rLmZyLm1vbGVuZGFAZ";
  let final = "21haWwuY29tDQ";
  let funny = atob(base1 + bas2fs + final + "o=");
  const emailElement = document.getElementById("email");
  if (emailElement) {
    emailElement.innerText = hideEmail(funny);
    emailElement.onmouseenter = () => {
      emailElement.innerText = funny;
      emailElement.href = "mailto:" + funny;
    };
    emailElement.onmouseleave = () => {
      emailElement.innerText = hideEmail(funny);
      emailElement.href = "mailto:*";
    };
    if(isMobileDevice()) {
      setTimeout(() => {
        emailElement.innerText = funny;
        emailElement.href = "mailto:" + funny;
      }, Math.random() * 100)
    }
  }

  base1 = "Nzg2ID";
  bas2fs = "NDA";
  final = "A1NiA3";
  const phoneElement = document.getElementById("phone");
  let funny2 = atob(base1 + final + bas2fs + "=");
  if (phoneElement) {
    phoneElement.innerText = "+48 " + hidePhoneNumber(funny2);
    phoneElement.onmouseenter = () => {
      phoneElement.innerText = "+48 " + funny2;
      phoneElement.href = "tel:" + funny2;
    };
    phoneElement.onmouseleave = () => {
      phoneElement.innerText = "+48 " + hidePhoneNumber(funny2);
      phoneElement.href = "tel:*";
    };
      if(isMobileDevice()) {
        setTimeout(() => {
          phoneElement.innerText = "+48 " + funny2;
          phoneElement.href = "tel:" + funny2;
        }, Math.random() * 100)
      }
  }

  let matrixDirection = 1;
  let matrixText = "Częstochowa, Poland";
  const addressElement = document.getElementById("address");
  function loopMatrix() {
    if (addressElement) {
      animateMatrix(
        addressElement,
        matrixDirection === 1
          ? matrixText
          : matrixText.split("").reverse().join("")
      );
    }
    setTimeout(() => {
      matrixDirection *= -1;
      loopMatrix();
    }, 2500);
  }
  if(!isMobileDevice()) loopMatrix();

  const counter1 = document.getElementById("counter1");
  const counter1Value = 3;
  const counter2 = document.getElementById("counter2");
  const counter2Value = 35;
  const counter3 = document.getElementById("counter3");
  const counter3Value = 20;

  // count up counters

  function countUp(element, targetValue) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100);
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      element.innerHTML = currentValue + "+";
    }, 150);
  }

  if (counter1) countUp(counter1, counter1Value);
  if (counter2) countUp(counter2, counter2Value);
  if (counter3) countUp(counter3, counter3Value);

  const key = "LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tDQoNCm1RSU5CR1hIOEM0QkVBREpZTUE5SzdUYTRuaG1HWXFBWHlONG5EU0g0VWtPby9icFRidERSTDlaR3ZPVEYzSDgNCjQ3b3NhWmp3czJVak4wTU04em8zbFR1WFNiSERsRzBWSTJhakxmY0lFUjNmTGZ0blI3aTdKU3ZnMzZKdzVSRFcNCkJ3MGtXTnM4NndabzVsOUZJQ3dsL2VxelZYL0JHenRpcUM3ZXRCS0JDTkRtdVBGV2xnVDhUYWI5Z1NlWkdTMDANCjZ3d0tYOXlnZi94MU9lSkc2VEdmQUF3Q0F4V1I0VkJBN292eTM1cHZVdVhRQkRZdHlBSmVSUW91NGthb09jUVYNCnlKQVZzSU9ydExscHFHelVnb1MyRWY0UzlmUU0zWUw4UWdGSVA5N0lPdTJUWnVQWmZLcjV4SjBleVpXVHpZdG8NCk9HQytwc2xNSWVheHorbEV5TE1MWTFsS0Qva0x3WE9VVVR0ZUtRWGZRUVpPM3p3SnRlS21vbkNYUEpEMFJSSmgNCisvZ2QzdkRXeEVZSVV0OHU3L0l4WUoyTUxYajZIaXNiZkFwVk94Y3NmN2lKdkRXenNUNWM3TVhOcHNuLzhqN2UNCk9nblYzT0FBa2dJSzZ4OTcwVk83ZndlYlhtbkVOaU9IZHROejYzbi9TUGZmcFBDclVncTAxak9oZ0FLLzc5YXMNClVrRm1QQ3p5ejNEYVVOZWRFRXVzM0NObDhhUnZWb2I0NEZVcFMyNVd0RmNaZ0FnTmVvdFdIOGcyKy9aaEJKOVANCnJsV0ZEczJPbXQ1d0NsTEZsNDlKaTB6MytBd2tmM2N2WUZ1dVFOdU1lVGs1aW44RmFycGhINWNkN3NycW9sNjcNCkZNcnhROEliak82UzBoNFR6K3gwWFV1b2FKaHpvNG9lTkpueExrUExXR2JGRm03ZXJFc0ExR08xNndBUkFRQUINCnRDRlFZWFJ5ZVdzZ1BHWnlZVzVqZFhwamIyNTBZV04wUUdkdFlXbHNMbU52YlQ2SkFpMEVFd0VLQUJjRkFtWEgNCjhDNENHeThEQ3drSEF4VUtDQUllQVFJWGdBQUtDUkFPK1JzWndYc0NwdlVBRUFDRGdKQ1hnZ2pISVFnb3hqekQNCitDOVMvcy9MQnJtKzZtNGwxMHdwRVZXMFA2NVFOTDRPZGVsRUswbXVVU1I0ck56eHQ0QTM2ZVJkRnVLL3hBYXENCm5hcGpodzVSMlQ0NXZtcTlMOGd0dzQ5TlpzOHRzZmZGTkJ3VjNsWm5PS25XUE9NaHFydkZMbkVCVHFQZm1VNWsNClIySG83Sk1OYzFJNEpyTVBYV2hGN2tESGdoMXRseHBRU3h2M1RaekRDRnN1bWhVbVBCSUJzdEt3MUdOcVJ5WEcNCkJqZTFxRWJBVktYcGhMZmhEV2dqTWRhQWpCQ01RVzJYV05wZ3FrdmVSODd5THliVDZocDJNN0tob3ZZc09kVUINCnFvM1lUUkxBZm84S2FpVVRKNHlJMzRRelhqbWtHbHFLS0VGWUFnNWREYk5Wajh2Nyt2TjRXSko5a214UDVLcHUNClRJSzBndzdwMXkvZk9nQmozUnEvRW9FekFibkdjaEtnYUIzQ2ZuaEtYQ1RSbTV3OGwzUFZpZUxiR0F2UWpTOEENClJZeHd1WDFyd1dOU1JxZVJQNjJQcFlVM1NsV1FFMFBVblB1SkZhOWpPbitsYlpzRWtRMll1TTRHb2hHald1b0UNCnlkbWpNWDFOM1lZWkpJNysxK1M4Q1ZuemticldLTkhYSFA2MkhuYXYreWNUeURnd1AzT3NkYUppOStEV2cyS0gNCjV5Yk5EdkY1UlpMZVNKZER2ZUN3OHlPdXRSc0xySG4vRzdFUkw1OVRFY0xrenNCMXlUdWNGWkZ1M0pTMGJDc2YNCnlJYnlBbGxIcno3cEo2cSsrcElxWDh3K0hZNXRSNE4rM0xGd3hZMnJ0dEUzcm40YTF6OXRJR1Z5cVppbTdTTzQNClJFdHNhVjVCdGhyNFB0YUFEMmVoVysvZnhyUWJjR0YwY25sckxtWnlMbTF2YkdWdVpHRkFaMjFoYVd3dVkyOXQNCmlRSlNCQk1CQ0FBOEZpRUUvZ1R5dkxjM3JndEtTK2V1RHZrYkdjRjdBcVlGQW1oY21Bd0NHeThGQ3drSUJ3SUQNCklnSUJCaFVLQ1FnTEFnUVdBZ01CQWg0SEFoZUFBQW9KRUE3NUd4bkJld0ttZXM0UC8zYmowRzVnZWdoZHdMQjkNCnlaNXpNL09jMVdVaVNsL1ViaVRxcUtYMCtBUm8vSmdWaXVVWmd6VHJUNXZmWUZVMXlPT29PK001Nk9ERnlNU1INCmk3MW1wQ0JTTG1oSU9pZnJMQU9INC9nZzZGNVdrTkZZSm9RWHZOaENoWXFpSG42Z09qeFdUTXF5K29uVG1lSmkNCnBXRURmRklwWUJQYTUrOGRPNVFJNHRiWUJUUVFMWTR4TTN4NGZKay8vc1ovK214aXRyM1FuZ0ZyaTRYK1ZXNnUNCkN1SjZLcGRUTE5mNkQ4VGFpU1dCaHFUU1B6ckF1NEtOaW16bzhRcjlaa1c1MUxkSXlHUW5TQThTNkpybkpEcXMNCjhDUlQzOHgyT3JRU0d6OVNSQWhrZ1lTRXFsOVU4Wm0xQ1orVEtZTUxFS0o3Yy93RHMyaHlyZjcvY2Y2bHpzd1gNCnl1Q3dnZ2pwcXRpWXV5OVp4R0k1UnEwN1d5SzJzSmlPUTRtRG81eUdYaWozaXp4THBEaHlOR2J1aW5NK0l6dWINCkl5L2FnQy9DNDhneXkvdE9jVldDRnJlL2NOWk15SUtJdUpoMkJOc2h1a3pRQXB4c0c2K2ZYa05zY1lSeXZ4ejMNCkhscnd0UWp5d2pNanVyVlJnbkYzU1dkSklpd21VZ2Q2Z2RtUm9VTUR0VXhlUlEwc3FURW1LRmxDbzZQZkRJbmwNCkxHYkdCSkRFNzNJdXpYSEQxYkF0VzZrQXhnVUlUOE1TQlZxcUNycWtVMUpFcnp1S1J0TWlkdEJ3Q0xvQmE5aVgNCmkyTk41bGo4NmZqbUxwVWovSXU5eG52NklSMllRT2lnQ3B4RnFIZGZIL0huc1BOdUg4NmlPcWdCMEdKdFBvZjINCnJTcDhmL0FoUFpoWnpSQ1BFY2JmSkhQeiswL2J1UUlOQkdYSDhDNEJFQUMvRWE4UkVoN1BlTDJ4RUM1OUkxVG4NCndseVJSMlh3QmZCeXd0ZVNza1IvZ2kxdVpKRzBld3cvaEUwQWxGY01rcjc5dlJWemNZd05KVFNVNC9SNEhxdTUNCkVoTG85Mk1FdzdUNFJjbDYxTDV1RFpqMDRsRndKdVlzUmVMOEo0bHA0VktiREo2VHVwWmxGT0pwanljOE5jV0ENCmFwZUdQby80YzdscStmM1pGbWFYbU14Uzc3TjdFYUNJbnhhbTB0c25EVFJobWM3eGNYOGdFQjZlT3BJZHJiT2wNCklMNlQ3Vi9PNHlEYXJ2VnBiZlN0YnV0aWsvWjRCSWRodTA3bmIwZzB4RzArVXpDRzY1b3NsMkFOYVdFTUtUa00NClRvYXFMbElPR3UxMHFadDgveWJrdEtvVThOeVdZK3c1bGNQSk9ETlAxcGtFdFUwWHJZTjNTMm04RTU1cEtqTEoNCnFOR3p0YkpPV2ppZlJmK3B2R3VjZlhlbGVyUnMydU1mTjR2a2FNTHJxbllIZytOaWt5Z3RrRTV2TDNhM1ovQmgNCmh1aDFIcTJ6Skh6YlJoYXpZUDJSTTEzQVJlWGdaaVZkTzFXMlczQ2VTNG5wc2YvbHU1SGhNZi9yc0VJeEdsL20NCmp2SWloTXBmMnFKVnl0d3FwbSszYU95RXpvS1I5TVdDNmlpaUNkNStra0haQ2NoczhBejJla2NaU0haSEFVOG8NCnY4bG9oWElBTnVIbW1lc0VwUlBsSnp4WXFjVWd0MHJNb2U2RmlXMW5qQjNJS0tPVXVTbENLaysrSUx1Wk5aaDINCmFwMmdjY3lFVmlYTlNYbWZZRllkMVFaYUhvU0lhK21lVE9jSFpIYkVZanIvYXRvdnl5UjFDbW9JMTZWcEpGMXkNCkZJNUp2SjhEbU9aUmFvSklIQUt2VVFBUkFRQUJpUVJFQkJnQkNnQVBCUUpseC9BdUJRa1BDWndBQWhzdUFpa0oNCkVBNzVHeG5CZXdLbXdWMGdCQmtCQ2dBR0JRSmx4L0F1QUFvSkVOSjNHY0ttODRYRDR0VVAvaUlNNEFSdllBbEgNClpvT0t4L3pBdVJiZ1ZGemU3cVlCVEZocE9kWXQ4RitCRWpKSDJVYUZyU1UrVHp1ZW8zZWRHd2ZNV1dadmVSenMNClhXdjhpZUttWW9PSjh5UXBPQ0QxaUNvUG5hb0Z6UXc4VDJTTFBmQTh5YWNocnRUdUNnQUxLZFRrUXVhK1VKa24NCkErTjJZcis4RzRIVkYrOW5KbTVtM2ZvRzFhdXBrQVd1cVRQSGpRMXN4aEFtVDFDT005S21JdU9LY0FCVW9zYloNCkxoekNEdWZBSE1KWFYzT3VMYVBUVzVISUZEQW01ZEpHb0tsYUlkaEdSdG9lS0JkZ0RZNE8wUm93OUxCSjBoTHUNClo2MjNhZDlSTGdDQmhhenNWQnUxSWo4alFucjZHZmZ5VzRweEJYUlNiUXlneEhaN2RhZnBjVnN0NTQrMnByVFINCnZLYTUyRmRVbkt0ZjRrSTI4dlppbC93UWVJMTY4NTVyQW5hOTJWMUtjMSs2Z2llV1VwVlpJUXZZM1V5VHcwYVkNCk1GTllSMXpjZHc4eWVNRUFOMS9HYUw3SmtxOVBpZFR4RWp3eUlyUzkzK1Y3eWZodzFXR0V3dXA0WUtWR2pVWEENCnlCWkxWZk5OVVYyNm41a2cwMzVTOFRiNnNIZDlXbDNscTRkR3N5S0pxeE1oSUhoSG1lUTMzVHpRcWFnVmNyQmsNCklFMDJmNnZ6VktSMmhTSjkzajMyUFJNek5lcUEvRlZ5N3ZvcjRqRkNqclF0T0JydjlyYjR6UEU1eFJpd0VUVUgNCmgwU25YazVYQ0p1VEFPbkNaNXl3WTZkRnZ2RTBoZ1h5QzdFYmZOZVlHOXdZUUFVYjV3b21XRDBNMitjU2pxVU8NClAwRnJtNlNnV0dEc1pLR3dHc29ic1g2RHpROWVHZGNtOExzUCtnTXNNd3M3WEZNNWFYWlhxSnlPWnVnUUVxSUUNCmU0MzZJelZCMTBqLyttdU9ERnJpak5GdjR2L0pqanJQS203elUxekZDbGVTc0F5eWMxVnZDQTNVN0l6YmxHd3YNCjJoYkk2MSsvdjN6YzNnQzh4ZkxDRHpwL1J1UlhSMEdsTCszend0S2FyYVhhUUpVejIyUFJieFdNQmFMNXpmQysNCnAxSmVVbzl2amo2cEZYNHpHNlJJRE1YeUJKaEJHN0FkRzViQnBES3lJZDRDZjRJNzUrOStMbngrUXRnUDdkVjANCk5jaW9tczA5aTdQQkxrU2JidzlKUUdlZm9VZ0N1OW82c2IvOGVDN0daaHZyWWlvSks1eTMzd1JEMC9qNlNsV3MNCm9SVVMxZDVLOTRjTnRrRld3OHFZSk5wZm1MWUY1dExYOTA1b2JBTDltTnV3RmRBMEtQQVNibkNhZ28zQnA1WWQNCm9HNnNMbUYzbytpTXhSVjAwNXp3Z3ZIOEtOcDJhMnhTUFN0eHZnVXJIMjlOc0VwOWlyTS9IdWZwd0dldFd5YVMNCnBZZUp5RXhKR3dGUnlnZnVqTzROY3NKckRud1hOVGN1SE5rMi9mNFFwU2pnNWRtT2IvUXRUOTJONlFYaWlzMVgNCi9pcUUvTDVycTA0akQ0SjFJcFY4OXVsY1YxaGlYbTAvckVoRlUrZGozQlJkOThIYm9YTTZtWjBFcmVqcExmMWsNClJ0UHVFRUZ1b3lUK3g1dzhWTC9UdkROMFZuM0JsS1E2TGF0WWQ3dDFOMXRoWjd3SEhBZmc5b3ptV1VIUXpDcmENCmZOdTNJVW11NzdnNldnOWM5NGNNRWxEQURxUGx1bGptVmFrRVl3SW5rSE4yT21DSU9heVNhcnJLZG93dlBhWWINCk9veGRIMjlXRi9tZEJRTXl1UUlOQkdYSDhDNEJFQURBdmlwcWxPZnJBT24wMTliM1JETHo2a0pKVTIwaWYwQksNCnhpcEdRUDhRSTI1K2dsS1JHcGczbmpFanlidnlTYmtUK0NaSU1iaVVZWDI4Vm5qRExuSDFic2NSZVRSUnVNTUINCjBjVnRDeUZCVncvZEhlcjlIQmEvV2kvSkZxU2hvbUpJU2g2bFJaT1RTcU0xa3htRkhmTExPcHZwakw4cm1WNm4NCnFqTnlaWGZvSmh6bFZpOUFtZ1Zkd3JZWmg2SVhhTHhCVWxRSHZXT1MyVE1GT3VOTUt1akN4ODF0VXRVWUZIRjgNCjlCbDh5ZVJKMVhjblNjKzllODAwcnhJVXFMeURkRHlTcDlJdjFjS3pwNUJCRG9ENTdzZlRuSVd3Sll3bk8reEgNCnlqYWJ4Sy84eklJSmNoTFFTVXBpZmIzQUV5NTdOZXIwWlIzT0NlTHhNdjFVWHNOaUsvaGV5QU1waW9XMGJPRDINCkt2cFk3aEpRRzFUNWRmNlVqbEpHQ1NjOGMvLzJiN2l4WjdmYk1CSTVOOXNlR0FnMGxJUUJEa0diZHBPbzM1VzgNCmVGMGhjR0p5RjY0SDVaWE5BU1VuM2dsaUVyTzM3L1R4MVRiT2l2Zis2Ly9leHVyMGp4c084aWJBV3hla3BzeFQNCkREdE00VllxUTZMTVRuVlBScGpRR1NoWWxHdDNqWmtxc2x2TGtLWWZ3bkptY2labUVudXBLNHpEc0hnV05CK0YNCk4vTHVSREpOSTEvd2NKVVBwWVpVMHdwZXlPejFlalByaENDdWNFcE5aNU9id09XbTRyVVgrTFRuMUNza1VmbU8NCjZVd0gzRXYxSmpuS0xHQTM0WXFVZUhDWnlYY0Y4RFU5dlllOG9qaElKSHdKaitxcFUvUkRma08yZUxNdzVmM3ENCnRKU0JNdDN1UFFBUkFRQUJpUVJFQkJnQkNnQVBCUUpseC9BdUJRa1BDWndBQWhzdUFpa0pFQTc1R3huQmV3S20NCndWMGdCQmtCQ2dBR0JRSmx4L0F1QUFvSkVQV1BZcmJMdVc3djQwOFAvamZBc1FnVnQwcFFvalhpOUZtQVJhRngNCmlKRFI0ZWhxaU5qUTgvMUFQNE5ZZ05mNGtjdnozWXZHdFJtT1JiSHpPL0ZyZ1hleFEwalR2MFdlTWNoTTRWbGQNCjF6RERMYTkvS3drR2tSZkZESVZQR0ZETC9JRHJ2bzNXTU9jSWJtYlA4Y3dXaHdSMWsyamlIL2pZUlFUNTJOOVYNClFOV0JuV3NhcW9IY3RQcWp5UkFRTmlub3JyeDExTER4UmtSSWVCZnpZTXZtZjJ6QkU2NGNYVW41OVk0YytIdVENCjBXZ0xHUGtuMVNrNjJYbTM4QTErWkNmL01lOHRXQWxUc2o3a2tNOVh0V0ZxdzYxekQzdjFoTDd6dkRsQmRBalcNCkFzdU9KWk4xODdNMHJ1WHkxSXl6SjE2eHVnS1JuWlRFdjI2WGZmamlDelBVbldZL3BHanhqS1JQeEN2bjZ5RVYNCm9mTi9YeWN6SW5Sck9TSnUzYTkrVnV3NmZaM2hTczY3Tll2SFVFSS90NWpyVlJtSDVGNWMzeE9SQ3RxYjRnaTUNCm44T0VZeCt0UXFKV1Y1SVBzSktEQ0hYeXU5eUpJbUpyT0hqVjJCekhBYnh6cmNweFpZWkxFSkpqUlVXRC84cFENCm1STUtuTG9tWXJnazNPRUVJcVR4dmRLYTJYLzFZdkJwZWYvQVRSWE9lY3RDcm9sbUdmN2RjRjgvNjM5RGpIdlYNCmgzTVp0R2ZlRjkvQVNVd0hocUxEWE1IS1g1SE1zK0Q1OU9mdmg0dGlzNnhjemxraVhrVDF0dmZNTlJtckJDYSsNCkRraFBXektFZ012U3J5QlVHZXhQMXg1Z3QyUmcwVG1Xak13bUxKaXU1OTdvUGhOQTVWUnNKZkc2SW9XTVcrMkMNCmszOWJjUnlpa1phbHUzcisyUVFmdUtzUUFKcDA5QTJYSFJzUHlXK1JNME1URFRlN2RpS2xraGd0eXVQRnZZRmsNCnZ2WmlVOGhBNmI0OW1PWmJVcWZBa0NncCttc2NGSERTN1hqRE0xc0ZCcjFEdXZud1NFTkROdlRuV1ZUbDF3YWYNCmVqRi91V0lCWHFjR2cwL3lrQVVTYWhJOGZXenFuK3hENk5pNlpNRFk5bzJjUFYxelcxa3p0MVo1dWxpdG5uNlcNCkJYV2xPV1Bxb0FVa0QzMFRLWVNvV01zUStpMlhmVVNFcjhQU29VKzExb0xRSXdQWStQN1Q1ZkgrMFlwZWVtT0gNClZtQjJJbUkyY2o5bFBLbHI4eTZya1VaaDVRamtSTUVtT2o2S204anhlamJoY3FUU2Q2Qll4ZGhLRWh6b2FzNVcNCjVhbDNzUXdidUFwNzh5MThIMEoyZlpmNEFjMXk3OHd4STFZaDhLSktDNk5xWCtIZmN2Rm03V1o1dFlZWkVWeDYNClJicTN0emgrR1FuOTJrbXZTSnBVQjAzU3E1SG8yYkphWm84Z1dQODdyZkhnbm5xRVpxbnNZM0MrbkFiM1hraDINCkRsNDBobmE3NXJycWlvSk5TWEJPKzRIaHVYMnhTUVhGMk9NZGNVYUdtVmZveUJQeFdnZ2xBTUZLeUk0VkZJRmYNCklsaWExOU54MklURWowSTBiaElyanZyVXFReE51Q2VWbVY2Tm8vNWxBekZkbDNueW03ZVRNTE1jcCtzTnZFcHkNCk9KVXlYRkUvb3ZhUlFhdno4eTRGc29oWG1INVQvd0V0ZlNYeDZwS1BiazdabzJ3MFZBQm9ITk1xNTVJVHF0S3kNCnlDTlJzOUllZm1Hd3VuMXdYZHBRWmo1UjZWQVlRUjFhMC8xOGFsTkZDOGFMUytBUjE0TXE1SEwzNWl6a1dydHANClBOdC8NCj0zNExPDQotLS0tLUVORCBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tDQo=";

  const pgpKey = document.getElementById("key");
  pgpKey.onclick = () => {
    alert("PGP Key copied to clipboard!");
    navigator.clipboard.writeText(atob(key)).catch(err => {
      console.error('Failed to copy PGP key: ', err);
    });
  }
}
