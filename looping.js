document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle the active class on the menu when the hamburger is clicked
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

function factSumAvg()
      {
        //factorial of last n numbers
        let num=0, x=1, count=1;

        num = document.getElementById("nnumber").value*1;
        console.log(num);

         while(count <= num)
         {
            x*=count;
            count++;
         }

         document.getElementById("factorResult").value = x;

        //summation
        let totNum=0,  count2=1.0;
      
         do
         {
            totNum+=count2;
            count2++;
         }
         while(count2 <= num);

        document.getElementById("summationResult").value = totNum;

        //average
        let avgNum = 0;

        for(let i=0; i<=num; i++)
        {
          avgNum += i;
        }

        avgNum /= num;
        document.getElementById("avgResult").value = avgNum.toFixed(3);
      }

(() => {
    document.getElementById("fsaBtn").addEventListener("click",()=>
    {
        factSumAvg();
    });

})();

