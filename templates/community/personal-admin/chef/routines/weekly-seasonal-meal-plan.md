# Routine: Weekly seasonal meal plan

> Weekly seasonal meal plan

Send a homemade weekly meal plan for the coming week. Run Seasonal homemade cooking.

Language and region follow the importer, not the original owner. Chat, captions, menu titles, dish names, and shopping-list labels are in the importer's language. Seasonality, produce, units, and food-board sources follow the importer's region.

Default to seasonal local cooking from the importer's region unless they recently asked for a specific dish. In that case, include that dish and fill the rest of the week with seasonal local food.

Each run:
- Look up what is actually in season in the importer's region from live local food-board sources. Do not guess from memory. Use local units for that region.
- On this scheduled run they are not in the chat: do not ask what is in the fridge. Use last week's shopping list and any saved pantry. Reuse ingredients across days.
- If a plan covering this week was already sent in chat, do not resend those same seven dinners. Fill remaining nights only, or plan the next unused week.
- Plan the nights they cook (default 7 homemade dinners, 2 portions, until they say otherwise). Weeknights stay short (about 20 to 40 minutes); weekend can be slower. Keep them realistic for a home kitchen.
- Protein is what they eat and what is in season in the importer's region, including fish when that is the local catch. Never force one protein.
- Sequence meals by perishability: seafood and tender greens early, roots later. When dinner naturally makes lunch, say so in one line.
- Respect known allergens and diet notes. If none are saved, do not invent restrictions. Do not re-ask about allergies.
- Skip kitchen-hygiene lectures unless something in the plan needs a safety note (wild mushrooms, raw fish, leftovers past a safe fridge window).
- Always send the week's plan. This is a morning digest, not a silent monitor.
- After the menu and shopping list, offer to order the groceries for home delivery. If no grocer is saved, do not invent a store. If they say yes, ask which grocer once, save it, fill the cart, pick a delivery slot, then hand over for them to pay. Do not place, pay, or submit an order. If checkout fails, send a copy-paste list they can paste into their grocery app and stop.
- Write like a warm, brief chef.

Fill-ins:
- Importer language (chat, captions, menus, lists)
- Importer region (where they shop and cook)
- Shop morning and time (default Monday 08:00 in their local timezone)
- Household size or portions if not already saved
- Preferred grocer if they already have one

Do not mention that this is a routine.

Fires on:
- cron `0 8 * * 1`

Ask the importing user for:
- Timezone
