import React from 'react';

export const MainDetails = () => {
  return (
    <>
      <section>
        <h3 class="main-titles">Education</h3>
        <article>
          <h4 class="secondary-titles">Bachelor's degree, Power supply and electrical equipment in industry,
            Technical University of Varna, Varna</h4>
          <div class="m-[0_5px_10px_0]">
            <span className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]' >SEPTEMBER 2009 - JUNE 2013</span>
          </div>
        </article>
      </section>
      <section >
        <h3 class="main-titles">Eployment History</h3>

        <article>
          <h4 class="secondary-titles">Computer systems technician, in Tempus2000, Varna

          </h4>
          <div class="m-[0_5px_10px_0]">
            <span className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]'>may - 2023</span>
          </div>
          <p className='text-[14px]'>
            Full printer maintenance, including software installation, part replacement, and
            sourcing necessary components.
            Diagnosing and resolving technical issues to optimize printer functionality and customer
            satisfaction.
          </p>
        </article>

        <article>
          <h4 class="secondary-titles">Technical contractor - Construction and maintenance of Internet and TV
            network, Top Net, Varna</h4>
          <div class="m-[0_5px_10px_0]">
            <span className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]' >october - 2021 - april 2023</span>
          </div>
          <p className='text-[14px]'>
            Installed internet and networking equipment in clients' homes and
            businesses. Performed full maintenance of the physical part of the
            network.Troubleshot and resolved connectivity issues, ensuring that
            customers received optimal service.
          </p>
        </article>

        <article>
          <h4 class="secondary-titles">Office Administrator, Econt, Varna</h4>
          <div class="m-[0_5px_10px_0]">
            <span className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]' >JANUARY 2019 - OCTOBER 2021</span>
          </div>
          <p className='text-[14px]'>
            Responsibility related to the correct execution in the transportation of shipments, as well as
            the receipt and delivery of money transfers. Work mainly with customers. Material and financial
            responsibility.
          </p>
        </article>

        <article>
          <h4 class="secondary-titles">Technical contractor - Construction and maintenance of Internet and TV
            network, Telecomunication Company Varna, Varna</h4>
          <div class="m-[0_5px_10px_0]">
            <span className='tracking-[2px] uppercase text-[10px] text-[#BCC0C7]' >NOVEMBER 2015 - DECEMBER 2018</span>
          </div>
          <p className='text-[14px]'>
            Construction and maintenance of an Internet and TV transmission of a network.
          </p>
        </article>
      </section>
    </>
  );
};
