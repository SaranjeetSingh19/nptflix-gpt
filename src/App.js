import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './components/utils/appStore';
import { useEffect, useState } from 'react';

function App() {
  // const [hideHorizontalScrollbar, setHideHorizontalScrollbar] = useState(false);

  // useEffect(() => {
    
    // const shouldHideScrollbar = window.innerWidth < 768; // Adjust the threshold as needed

  //   setHideHorizontalScrollbar(shouldHideScrollbar);
  // }, []);
  // className={hideHorizontalScrollbar ? 'overflow-x-hidden' : ''}
  return (
   <div> 
   <Provider store={appStore}>
   <Body />
   </Provider>
   </div>
  ); 
  
  
}


export default App;
