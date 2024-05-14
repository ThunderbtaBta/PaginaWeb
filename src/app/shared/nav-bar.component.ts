import { Component } from "@angular/core";

@Component({
    selector:'app-nav-bar',
    template: `
  <nav class="flex justify-between items-center fixed top-0 left-0 right-0 shadow-md p-10">
    <div class="flex justify-between mr-10">
      <button class="flex justify-between items-center ml-4 text-green-500 space-x-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
   </div>
      <div class="flex items-center ">
        <img src="../assets/img/Group 123 (1).svg" alt="Skandia" class="h-6 mr-10" >
        <span class=" text-2xl font-montserrat" >
          Plan Financiero Digital - FPX </span>    
        </div> 
        <div class="flex items-center space-x-3">
          <img src="../assets/img/Happy.svg" alt="" >
          <a href="#" class=" text-[#00C83C] font-bold text-xl underline" > Tu Financial Planner</a>
        </div>
        <div class="flex items-center space-x-3">
          <img src="../assets/img/hand3.svg" alt="">
          <a href="#" class="text-[#00C83C] font-bold text-xl underline" > Aportes</a>
        </div>
        <div class="flex items-center focus:ring hover:scale-90 group-focus-visible:">
          <img src="../assets/img/comp faq.svg" alt="" >
        </div>
  </nav>
  `
})
export class NavBarComponent{}