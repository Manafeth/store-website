import React, { FC, useEffect } from 'react';
import { TABBY_PROMO_KEY } from '../../constants';

const TabyPromo = ({ sar, price, selector }) => {
    useEffect(() => {
      new TabbyPromo({
        selector: `#${selector}`, // required, content of tabby Promo Snippet will be placed in element with that selector.
        currency: sar, // required, currency of your product. AED|SAR|KWD|BHD|EGP only supported, with NO spaces or lowercase.
        price: `${price}`, // required, price or your product. 2 decimals max for AED|SAR|EGP and 3 decimals max for KWD|BHD supported.
        installmentsCount: 4, // Optional - custom installments number for tabby promo snippet (if not downpayment + 3 installments)
        lang: 'en', // Optional, language of snippet and popups, if the property is not set, then it is based on the attribute 'lang' of your html tag
        source: 'product', // Optional, snippet placement; `product` for product page and `cart` for cart page
        publicKey: TABBY_PROMO_KEY, // required, public key which identifies your account when communicating with tabby. Test or Production depending on the environment
        merchantCode: 'string'  // required
      });
    }, [])
    
  return (
    <div id={selector}></div>
  )
}

export default TabyPromo;