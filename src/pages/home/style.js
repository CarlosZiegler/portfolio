import styled from 'styled-components'


export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   align-content: center;
   flex-wrap:wrap;
   width: 100%;
   padding: 0;
   margin: 0;

   .bg-color{
      display: flex;
      align-items:center;
      justify-content: center;
      background:#FF9902;
      border: 1px solid #FF9902;
      border-radius:5px;
      padding:20px;
      margin: 20px;
      width: 150px;
   }

   .column-2{
      display: flex;
      flex-wrap:wrap;
      justify-content: center;
      align-items:center;
   }

   .tag{
       display: flex;
       flex-direction: column;
       flex-wrap:wrap;

      
   }
   .contactLogo{
      margin: 0px 15px;
      max-width:100%
   }

   a{
      text-decoration:none;
      color: black;
   }
   
   
`
export const PrimayText = styled.h2`
   display: flex;
   justify-content: center;
   flex-wrap:wrap;
   color: #E4E4E4;
   font-size:2rem;
   text-align: center;
   padding:0px 35px 0px 35px;
   
`
export const SecundaryText = styled.p`
   color: #E4E4E4;
   font-size:1.2rem;
   display: flex;
   justify-content: center;
   flex-wrap:wrap;
   text-align: center;
   padding:0px 35px 0px 35px;
`

export const TitleText = styled.h2`
   color: #E4E4E4;
   font-size:2rem;
   display: flex;
   justify-content: center;
   flex-wrap:wrap;
   text-align: center;
   
   
   
`
export const Email = styled.h4`
   color: #E4E4E4;
   font-size:1.6rem;
   display: flex;
   justify-content: center;
   flex-wrap:wrap;
   text-align: center;
   border-bottom: 1px solid white;
   margin: 30px 10px;
   text-decoration: none;
   
   
   
`
export const SubTitleText = styled.h4`
   color: #E4E4E4;
   font-size:1.2rem;
   display: flex;
   justify-content: center;
   flex-wrap:wrap;
   text-align: center;
   padding:0px 35px 0px 35px;
   margin:0; 
`

export const Footer = styled.footer`
margin-top:30px;
   border-top:1px solid #fff
   
`

