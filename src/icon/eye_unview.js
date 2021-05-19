import React from 'react';

function App() {

  function HShow(e){
    e.target.style.display = 'none';
    document.getElementById('eye').style.display = 'initial';
    document.getElementById('inpSenha').setAttribute('type', 'password');
  }

  return(
    <svg id='eyeUnview' onClick={HShow}  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" hidden>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L13.6539 15.0681C12.2223 16.331 11.0244 17.8406 10.1188 19.5281C9.96521 19.8144 9.96026 20.1575 10.1056 20.4482L11 20.001C10.1056 20.4482 10.1057 20.4485 10.1059 20.4489L10.1063 20.4497L10.1074 20.4518L10.1105 20.4579L10.1202 20.477C10.1283 20.4928 10.1397 20.5146 10.1543 20.5422C10.1834 20.5973 10.2255 20.6751 10.2802 20.7725C10.3897 20.9671 10.5504 21.2404 10.7608 21.5662C11.1805 22.2161 11.8046 23.085 12.6228 23.9577C14.241 25.6838 16.737 27.5466 20.0003 27.5466L20.0166 27.5465C21.6939 27.5191 23.3263 27.0357 24.7419 26.1561L28.2935 29.7077C28.684 30.0982 29.3171 30.0982 29.7077 29.7077C30.0982 29.3171 30.0982 28.684 29.7077 28.2935L11.7071 10.2929ZM27.14 21.1028L20.5195 14.4763C22.747 14.6567 24.5718 15.9754 25.9187 17.4121C26.6346 18.1757 27.1867 18.9432 27.5596 19.5207C27.6768 19.7022 27.7757 19.8639 27.8558 19.9995C27.6344 20.3783 27.3955 20.7465 27.14 21.1028ZM29.895 19.5537L29.0006 20.001C29.895 19.5537 29.8948 19.5534 29.8946 19.5531L29.8942 19.5522L29.8932 19.5501L29.8901 19.544L29.8803 19.525C29.8722 19.5092 29.8609 19.4873 29.8463 19.4597C29.8171 19.4046 29.7751 19.3268 29.7203 19.2294C29.6109 19.0349 29.4502 18.7615 29.2397 18.4357C28.8201 17.7859 28.1959 16.9169 27.3777 16.0442C25.7598 14.3184 23.2641 12.4557 20.0015 12.4553H20.0003V13.4553L20.0026 12.4553L20.0015 12.4553C19.3459 12.4538 18.6924 12.5286 18.0541 12.678C17.7008 12.7607 17.42 13.0283 17.3204 13.3773C17.2209 13.7262 17.3181 14.1017 17.5746 14.3584L26.5258 23.3178C26.7238 23.516 26.996 23.6221 27.2759 23.6101C27.5559 23.5982 27.818 23.4693 27.9984 23.2549C28.7215 22.3955 29.353 21.4629 29.8825 20.4724C30.0354 20.1863 30.04 19.8439 29.895 19.5537ZM12.4409 20.4812C12.324 20.3002 12.2253 20.1388 12.1453 20.0033C12.9228 18.6787 13.9112 17.4907 15.0709 16.4858L16.9373 18.3522C16.8812 18.4508 16.8298 18.5522 16.7835 18.6562C16.5947 19.0799 16.4931 19.5374 16.485 20.0012C16.4768 20.4651 16.5621 20.9258 16.7359 21.356C16.9096 21.7862 17.1682 22.1769 17.4963 22.505C17.8243 22.833 18.2151 23.0916 18.6452 23.2654C19.0754 23.4391 19.5361 23.5245 20 23.5163C20.4638 23.5081 20.9213 23.4066 21.3451 23.2177C21.449 23.1714 21.5505 23.1201 21.649 23.0639L23.2781 24.693C22.2707 25.2314 21.1451 25.5265 19.9921 25.5466C17.5316 25.5435 15.5304 24.1349 14.0819 22.5898C13.3659 21.8262 12.8139 21.0587 12.4409 20.4812ZM18.4847 20.0365C18.4854 19.9934 18.4881 19.9503 18.4927 19.9076L20.0937 21.5086C20.0509 21.5131 20.0079 21.5158 19.9647 21.5166C19.7694 21.52 19.5754 21.4841 19.3943 21.4109C19.2131 21.3378 19.0486 21.2289 18.9105 21.0908C18.7723 20.9526 18.6635 20.7881 18.5903 20.607C18.5171 20.4258 18.4812 20.2318 18.4847 20.0365Z" fill="black"/>
    </svg>
  )
}

export default  App;