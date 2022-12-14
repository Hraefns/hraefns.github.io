let referrals= 
{
  Consulting:
  [
    {
      title: "Senior Functional Consultant",
      link: "https://smrtr.io/bvcQT"
    },
    {
      title: "Technial Consultant, ERP",
      link: "https://smrtr.io/bvcQ-"
    }
  ],
  Customer_Service:
  [
    {
      title: "Senior Functional Consultant",
      link: "https://smrtr.io/bvcQT"
    }
  ],
  Engineering:
  [
    {
      title: "Associate Quality Engineer - Testing",
      link: "https://smrtr.io/bvcRq"
    },
    {
      title: "Associate Software Engineer",
      link: "https://smrtr.io/bvcRt"
    },
    {
      title: "Full-stack Web Developer(java)",
      link: "https://smrtr.io/bvcRC"
    },
    {
      title: "Product Manager",
      link: "https://smrtr.io/bvcRD"
    },
    {
      title: "Product Manager - ERP Mobile Apps",
      link: "https://smrtr.io/bvcRM"
    },
    {
      title: "Quality Manager Testing",
      link: "https://smrtr.io/bvcR-"
    },
    {
      title: "Senior Software Engineer",
      link: "https://smrtr.io/bvcRW"
    },
    {
      title: "Senior Software Engineer",
      link: "https://smrtr.io/bvcS4"
    },
    {
      title: "Software Engineer (DevOps)",
      link: "https://smrtr.io/bvcS7"
    },
    {
      title: "Software Engineer (ERP)",
      link: "https://smrtr.io/bvcSg"
    },
    {
      title: "Software Engineer (ERP)",
      link: "https://smrtr.io/bvcSn"
    }
  ],
  General_Business:
  [
    {
      title: "Senior Analyst Programmer",
      link: "https://smrtr.io/bvcSr"
    }
  ],
  Human_Resources:
  [
    {
      title: "People Success Advisor, Indonesia",
      link: "https://smrtr.io/bvcSF"
    }
  ],
  Information_Technology:
  [
    {
      title: "Associate Quality Manager - Testing",
      link: "https://smrtr.io/bvcTM"
    },
    {
      title: "Associate Technical Writer",
      link: "https://smrtr.io/bvcVG"
    },
    {
      title: "Backend Developer (Java)",
      link: "https://smrtr.io/bvcVW"
    },
    {
      title: "Frontend Developer (Angular/Reat)",
      link: "https://smrtr.io/bvcWD"
    },
    {
      title: "Mobile Developer (Android & iOS)",
      link: "https://smrtr.io/bvcXZ"
    },
    {
      title: "Mobile Developer (Android & iOS)",
      link: "https://smrtr.io/bvcYf"
    },
    {
      title: "Mobile Developer (Android)",
      link: "https://smrtr.io/bvcYs"
    },
    {
      title: "Quality Engineer (Tester)",
      link: "https://smrtr.io/bvcYB"
    },
    {
      title: "Senior Mobile Developer (Android & iOS)",
      link: "https://smrtr.io/bvcYF"
    },
    {
      title: "Software Engineering Manager",
      link: "https://smrtr.io/bvcYP"
    },
    {
      title: "Software Engineering Manager",
      link: "https://smrtr.io/bvcYR"
    },
    {
      title: "Test Analyst",
      link: "https://smrtr.io/bvcZ5"
    },
  ],
  Agile_Project_Manager:
  [
    {
      title: "Agile Project Manager",
      link: "https://smrtr.io/bvcZ8"
    }
  ],
  Agile_Project_Manager:
  [
    {
      title: "Technical Writer",
      link: "https://smrtr.io/bvcZd"
    },
    {
      title: "Technical Writer",
      link: "https://smrtr.io/bvcZg"
    }
  ]
}

// logic
 function CreateAccordionTabInsideTabsClass(){
   let tabs = document.querySelector(".tabs");
   let i = 0;
   
   for(var category in referrals)
   {
     let categoryName = (Object.keys(referrals)[i]);
     
     let tab = document.createElement("div");
     tab.className = "tab";
     tabs.appendChild(tab);
     
     let checkbox = document.createElement("input");  
     checkbox.type = "checkbox";
     checkbox.id = "chck"+i;
     tab.appendChild(checkbox);
     
     let label = document.createElement("label");
     label.className = "tab-label";
     label.htmlFor = "chck"+i;
     label.innerHTML = categoryName.replaceAll("_", " ");
     tab.appendChild(label);
     
     let tabContent = document.createElement("div");
     tabContent.className = "tab-content";
     tab.appendChild(tabContent);
     
     categories = (referrals[categoryName]);
     categories.forEach((val)=>{
       let unorderedList = document.createElement("ul");
       tabContent.appendChild(unorderedList);
       
       let list = document.createElement("li");
       
       list.innerHTML = val.title+": <a href = \""+val.link+"\">Click Here</a";
       unorderedList.appendChild(list);
     });
     
     i++;
   }
 }

CreateAccordionTabInsideTabsClass();
