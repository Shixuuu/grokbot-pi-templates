---
name: fridge-list-recipes
description: "use this when a Fridge List owner asks what they can make, wants dinner ideas, or names or photographs a few ingredients"
---

# Fridge List: recipes
**Trigger:** "what can I make", "dinner ideas", "something with the chicken", or a short list or photo of ingredients ("I've got chicken, rice, and peppers").
**Never:** shop, order, spend, add to the shopping list unasked, or message anyone. No nutrition lectures or meal plans.

## Recipe library (about 200 common home recipes)
Work out each recipe's core ingredients and 4-6 short steps from standard home cooking. Draw on this list first:
- **Breakfast:** Scrambled eggs, Cheese omelet, Pancakes (from mix), Pancakes from scratch, French toast, Oatmeal, Overnight oats, Yogurt parfait, Breakfast burrito, Bacon and eggs, Avocado toast, Breakfast sandwich, Huevos rancheros, Vegetable frittata, Fruit smoothie, Waffles (from mix), Banana oat pancakes, Tofu scramble, Chia pudding, Shakshuka, Hash browns, Breakfast casserole, Egg muffins, Homemade granola, Biscuits and gravy, Chilaquiles, Greek yogurt bowl.
- **Lunch:** Grilled cheese, BLT sandwich, Deli sandwich, Cheese quesadilla, Tuna salad sandwich, Egg salad, Chicken Caesar salad, Cobb salad, Upgraded ramen, Bean and cheese burrito, Peanut butter and jelly, Chicken salad sandwich, Greek salad, Chicken shawarma wrap, Falafel pita, Mediterranean quinoa bowl, Veggie wrap, Black bean burgers, Pita pizza, Hot dogs, Vegetable sushi bowl.
- **Dinner:** Steak salad, Taco salad, Spaghetti marinara, Spaghetti and meatballs, Pasta with meat sauce, Pasta carbonara, Garlic pasta (aglio e olio), Lemon ricotta pasta, Stuffed shells, Baked ziti, Lasagna, Fettuccine Alfredo, Mac and cheese, Pasta with Brussels sprouts and pancetta, Chicken parmesan, Beef tacos, Burrito bowl, Chicken enchiladas, Fajitas, Cheeseburgers, Steak and potatoes, Shepherd's pie, Roast chicken and vegetables, Chicken stir-fry, Fried rice, Beef and broccoli, Teriyaki chicken, Peanut noodles, Chicken curry, Shrimp scampi, Homemade pizza, Rice and beans, Meatloaf, Sloppy joes, BBQ pulled pork, Buffalo wings, Chicken pot pie, Tuna noodle casserole, Jambalaya, Stuffed peppers, Lemon chicken orzo, Fish tacos, Carne asada, Black bean tacos, Sweet potato black bean tacos, Pesto pasta, Cacio e pepe, Pasta primavera, Penne alla vodka, Mushroom risotto, Eggplant parmesan, Pasta with broccoli and garlic, Chicken katsu, Kung pao chicken, Lo mein, Pad Thai, Tofu stir-fry, Vegetable coconut curry, Bibimbap, Butter chicken, Chicken tikka masala, Chana masala, Palak paneer, Aloo gobi, Vegetable biryani, Falafel bowl.
- **Soups:** Chicken noodle soup, Tomato soup, Pasta e fagioli, Minestrone, Chili, Chicken tortilla soup, Lentil soup, Black bean soup, Potato soup, Broccoli cheddar soup, French onion soup, Beef stew, Corn chowder, Miso soup, Egg drop soup, Tuscan white bean soup, Tortellini soup, Butternut squash soup, Vegetable soup, White chicken chili, Red lentil dal, Veggie ramen soup, Vegetarian chili.
- **Sides:** Green salad, Caprese salad, Roasted Brussels sprouts, Roasted broccoli, Garlic bread, Mashed potatoes, Rice pilaf, Street corn salad, Corn and bean salad, Refried beans, Coleslaw, Garlic green beans, Roasted sweet potatoes, Roasted asparagus, Roasted cauliflower, Cornbread, Baked beans, Potato salad, Cucumber salad, Mexican rice, Cilantro lime rice, Roasted potatoes, Quinoa salad, Tabbouleh, Cucumber raita, Jeera rice.
- **Snacks:** Cheese and charcuterie plate, Hummus and veggies, Nachos, Apple and peanut butter, Guacamole and chips, Deviled eggs, Whipped ricotta with honey, Trail mix, Popcorn, Edamame, Queso dip, Pico de gallo, Homemade hummus, Roasted chickpeas, Energy bites, Bruschetta, Baba ganoush, Tzatziki, Fruit salad.
- **Desserts:** Chocolate chip cookies, Brownies, Berries and whipped cream, Chocolate mousse, Hot chocolate, Banana bread, Ice cream sundae, Rice pudding, Peanut butter cookies, Oatmeal cookies, Apple crisp, No-bake cheesecake, Rice crispy treats, S'mores, Banana nice cream, Chocolate-dipped strawberries, Mango sticky rice, Kheer (Indian rice pudding).

## Steps
1. **Pick a source.**
   - **Saved list:** use /workspace/fridge-list/current.json.
   - **A few items:** if the owner names or photographs a handful of things, use only those. A saved list isn't needed. For a photo, name each item you can see. Don't save these items to current.json unless the owner asks.
2. **Match.** Normalize names and match loosely: "whole milk ricotta" counts as ricotta, "Protein+ cellentani" counts as pasta, "spring mix" counts as salad greens, shallots can stand in for onion, and typos still match.
   - Salt, pepper, oil, and water are free and never count.
   - Expired items, gone items, and items with a count of 0 are not on hand.
   - Items saved as guesses still count, but flag them "unsure".
3. **Filter and rank.**
   - **Saved list:** keep meals with 80% or more of the core ingredients on hand. Rank by coverage, then by how much they use up items expiring within 3 days, then by fewer unsure items, then by shorter time.
   - **A few items:** keep meals with 50% or more coverage that use at least 2 of the named items. Rank first by how many named items each one uses.
   - Meals only (breakfast, lunch, dinner, soups) unless the owner asks for sides, snacks, or desserts. If the owner says vegetarian or vegan, skip meals whose core needs meat (or, for vegan, dairy, eggs, or honey).
4. **Reply with 3-5 meals.** Skip near-duplicates. For each one, give one line: name, coverage %, ~time, and what it uses up ("uses the spring mix before it turns"), then "Missing: ..." (or "Missing: nothing").
   - Always include the 4-6 step outline in few-items mode.
   - With a saved list, give steps when asked, or when only 1-2 meals qualify.
   - If nothing reaches the bar, say so and give the 2 closest with what's missing.
5. **Missing items stay off the shopping list.** Add them only if the owner says so ("add those"), then save, which also writes a history snapshot.

**Done means:** 3-5 ranked meals, each with coverage, time, and what's missing. Few-items mode also has step outlines. Nothing was bought, and the shopping list changed only on request.

**Example:** "I've got chicken, rice, and peppers" -> "1. Chicken stir-fry, 75%, ~30 min. Missing: soy sauce. 1) Cook rice. 2) Sear sliced chicken; remove. 3) Stir-fry peppers with garlic. 4) Return chicken; add soy sauce. 5) Serve over rice."
