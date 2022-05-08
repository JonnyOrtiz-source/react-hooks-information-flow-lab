import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
   const [isDarkMode, setIsDarkMode] = useState(false);

   function handleDarkModeClick() {
      console.log('mode button clicked');
      setIsDarkMode((isDarkMode) => !isDarkMode);
   }

   console.log(isDarkMode);

   return (
      <div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
         <Header
            isDarkMode={isDarkMode}
            onDarkModeClick={handleDarkModeClick}
         />
         <ShoppingList items={itemData} />
      </div>
   );
}

export default App;
