
  import { useNavigate } from 'react-router-dom';
  import DefaultLayout from '../components/layouts/default-layout';
  import Message from '../components/UI/message';
  import { Link } from 'react-router-dom';
 
  const Cart = () => {
    
  
    const navigate = useNavigate();
  
    return (
      <DefaultLayout title='cart shop'>
        {/* <Container> */}
        <Message>
            Your cart is empty
            <Link to='/' className='mx-3'>
              Go Back
            </Link>
          </Message>
          
            
           : (
            
      </DefaultLayout>
    );
  };
  
  export default Cart;
  