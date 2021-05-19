import React from 'react';

function App() {

  function HShow(e){
    e.target.style.display = 'none';
    document.getElementById('eyeUnview').style.display = 'initial';
    document.getElementById('inpSenha').setAttribute('type', 'text');
  }

  return(
  <svg id='eye' onClick={HShow} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.4391 19.9717C12.3233 19.7936 12.2255 19.6347 12.1459 19.501C12.2255 19.3673 12.3233 19.2084 12.4391 19.0303C12.8118 18.457 13.3635 17.695 14.0791 16.9368C15.5279 15.4016 17.5321 14 19.9982 14C22.4643 14 24.4685 15.4016 25.9173 16.9368C26.6329 17.695 27.1846 18.457 27.5573 19.0303C27.6731 19.2084 27.7709 19.3673 27.8505 19.501C27.7709 19.6347 27.6731 19.7936 27.5573 19.9717C27.1846 20.5449 26.6329 21.3069 25.9173 22.0651C24.4685 23.6003 22.4643 25.0019 19.9982 25.0019C17.5321 25.0019 15.5279 23.6003 14.0791 22.0651C13.3635 21.3069 12.8118 20.5449 12.4391 19.9717ZM29.8893 19.0507C29.8895 19.0511 29.8896 19.0514 28.9964 19.501C29.8896 19.9506 29.8895 19.9509 29.8893 19.9512L29.8889 19.9521L29.8878 19.9542L29.8847 19.9602L29.875 19.9792C29.8668 19.995 29.8554 20.0167 29.8408 20.0441C29.8117 20.0989 29.7696 20.1763 29.7148 20.273C29.6053 20.4664 29.4446 20.738 29.2341 21.0618C28.8143 21.7075 28.1901 22.5708 27.3719 23.4378C25.7531 25.153 23.2582 27.0019 19.9982 27.0019C16.7382 27.0019 14.2432 25.153 12.6245 23.4378C11.8063 22.5708 11.1821 21.7075 10.7623 21.0618C10.5518 20.738 10.3911 20.4664 10.2816 20.273C10.2268 20.1763 10.1847 20.0989 10.1556 20.0441C10.141 20.0167 10.1296 19.995 10.1214 19.9792L10.1117 19.9602L10.1086 19.9542L10.1075 19.9521L10.1071 19.9512C10.1069 19.9509 10.1068 19.9506 11 19.501C10.1068 19.0514 10.1069 19.0511 10.1071 19.0507L10.1075 19.0499L10.1086 19.0477L10.1117 19.0417L10.1214 19.0227C10.1296 19.007 10.141 18.9852 10.1556 18.9578C10.1847 18.903 10.2268 18.8257 10.2816 18.7289C10.3911 18.5355 10.5518 18.2639 10.7623 17.9401C11.1821 17.2945 11.8063 16.4312 12.6245 15.5641C14.2432 13.8489 16.7382 12 19.9982 12C23.2582 12 25.7531 13.8489 27.3719 15.5641C28.1901 16.4312 28.8143 17.2945 29.2341 17.9401C29.4446 18.2639 29.6053 18.5355 29.7148 18.7289C29.7696 18.8257 29.8117 18.903 29.8408 18.9578C29.8554 18.9852 29.8668 19.007 29.875 19.0227L29.8847 19.0417L29.8878 19.0477L29.8889 19.0499L29.8893 19.0507ZM28.9964 19.501L29.8896 19.0514C30.032 19.3342 30.032 19.6677 29.8896 19.9506L28.9964 19.501ZM10.1068 19.0514L11 19.501L10.1068 19.9506C9.96441 19.6677 9.96441 19.3342 10.1068 19.0514ZM18.5455 19.5012C18.5455 18.7133 19.1903 18.0633 19.9996 18.0633C20.8089 18.0633 21.4536 18.7133 21.4536 19.5012C21.4536 20.2891 20.8089 20.9391 19.9996 20.9391C19.1903 20.9391 18.5455 20.2891 18.5455 19.5012ZM19.9996 16.0633C18.0982 16.0633 16.5455 17.5963 16.5455 19.5012C16.5455 21.4061 18.0982 22.9391 19.9996 22.9391C21.9009 22.9391 23.4536 21.4061 23.4536 19.5012C23.4536 17.5963 21.9009 16.0633 19.9996 16.0633Z" fill="black"/>
  </svg>
  )
}

export default  App;