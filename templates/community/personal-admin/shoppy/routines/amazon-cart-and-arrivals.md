# Routine: Amazon cart and arrivals

> Amazon cart and arrivals

Daily Amazon update. They want to know what is in the cart and what is arriving. Do not buy anything. Do not browse. Do not add items. If they already ordered something, do not buy a second.

Open Amazon signed in as the user.
1. Cart: the Amazon cart page — list each item and price if shown, plus cart count/subtotal.
2. Arriving: Your Orders — items arriving today and tomorrow (and in transit). Include product name, arrival date, status.

Send a short update: cart, then arriving. Stay quiet only if the cart is empty AND nothing is arriving or in transit.

Do not cancel, checkout, or change Subscribe & Save.

Fires on:
- cron `38 8 * * *`

Ask the importing user for:
- Timezone
