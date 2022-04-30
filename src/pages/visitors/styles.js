import styled from 'styled-components'


export const Container = styled.div`
    padding-top: 50px;
    height: 500px;
    width: 800px;
    display: flex;
    flex-direction: column;

    @media (max-width:480px) {
        width: 100%;
    }

`

export const ActionBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
`;
export const Title = styled.span`
    font-size: 40px;
    margin: 0px;
    color: #666666;

    @media (max-width:480px) {
      font-size: 25px;
    }
`;
export const Button = styled.div`
    padding: 20px 50px 20px 50px;
    height: 30px;
    background-color: #7845ab;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    color: white;

    @media (max-width:480px) {
        padding: 15px 40px 15px 40px;

    }
    
`;
export const List = styled.div``;

export const Status = styled.div`
    background-color:${(props) => props.status == 'active' && 'rgb(44 240 0 / 30%)'};
    background-color:${(props) => props.status == 'inactive' && 'rgb(50 47 47/10%)'};
    background-color:${(props) => props.status == 'removed' && 'rgb(236 215 60 / 26%)'};

    color:${(props) => props.status == 'active' && 'rgb(12 27 8)'};
    color:${(props) => props.status == 'inactive' && 'rgb(50 47 47)'};
    color:${(props) => props.status == 'removed' && 'rgb(220 139 6)'};

    padding: 10px;
    width: fit-content;
    text-transform: capitalize;

    font-size: 12px;
    border-radius: 15px;
`

export const NameContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding-left: 20px;
    .info{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: center;
    }
    .name{
        color: #740fda;
        font-size: 14px;

    }

    .username{
        padding-top: 5px;
        font-size: 12px;
    }
`



export const Action = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
        width: 40px;
    }

`




export const ModalData = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

`

export const ModalTitle = styled.div`

font-size: 30px;
margin-left: 50px;
color:#686363;
`

export const ContactOptions = styled.div`
    background-color: #e6e6e6;
    height: 40%;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .title{
        font-size: 25px;
        margin-left: 25px;
    }
    .contact-options{
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        .button{
            width: 150px;
            height: 40px;
            margin-left: 10px;
            margin-right: 10px;
            color: white;
            border: none;
            font-size: 16px;
            text-transform: capitalize;
        }
        .call{
            background-color: #7845ab;
        }

        .email{
            background-color: #2fc8ff;
        }
    }

`

export const Details = styled.div`
    padding: 50px;

    .avatar-status{
        display: flex;
        justify-content: space-between;
    }

    .text{

        margin-top: 20px;
    }

`

export const NoMore = styled.div`
    width: 100%;
    text-align: center;
    padding: 30px;
    font-size: 25px;
`

export const Loading = styled.div`

    width: 100%;
    text-align: center;
    padding: 30px;
    font-size: 25px;

`