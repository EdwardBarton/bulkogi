<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout row wrap justify-space-around>
      <v-flex xs12>
        <v-layout row justify-center>
          <v-btn
            large
            color="primary"
            href="http://www.bulkogikrnbbq.com/wp-content/uploads/2017/02/BulkogiMenu.pdf"
            target="_blank"
            >Download Our Menu</v-btn
          >
        </v-layout>
      </v-flex>
      <v-flex xs12 md4>
        <v-layout column pa-4 ma-1 class="menu-step">
          <h3 class="display-2 red--text text-uppercase">
            Step 1:
          </h3>
          <h4 class="display-1 red--text mb-5 text-uppercase">
            Choose Your Korean BBQ
          </h4>
          <p class="title red--text">Regular (Not Spicy)</p>
          <p class="subheading">
            Beef Bulkogi, Chicken Bulkogi, Curry Chicken or Tofu
          </p>
          <p class="title red--text">Spicy</p>
          <p class="subheading">
            Beef Bulkogi, Pork Bulkogi, Chicken Bulkogi or Tofu
          </p>
        </v-layout>
      </v-flex>
      <v-flex xs12 md4>
        <v-layout column pa-4 ma-1 class="menu-step">
          <h3 class="display-2 red--text text-uppercase">
            Step 2:
          </h3>
          <h4 class="display-1 red--text mb-5 text-uppercase">
            Choose Your Dish
          </h4>
          <p class="title red--text">Korean BBQ Tacos</p>
          <p class="subheading">
            Corn Tortilla + Asian Slaw + Onion Cilantro Lime Juice Mix + Tomato
            + Cilantro + Sesame Seed + Salsa Roja
          </p>
          <p class="title red--text">Korean BBQ Burrito</p>
          <p class="subheading">
            Flour Tortilla + Sesame Aioli + Asian Slaw + Onion Cilantro Lime
            Juice Mix + Tomato + Salsa Roja +Fire Roasted Corn + Black Beans +
            Fried Rice + Four Blend Cheese
          </p>
          <p class="title red--text">Korean BBQ Burrito Bowl</p>
          <p class="subheading">
            Asian Slaw + Onion Cilantro Lime Juice Mix + Tomato + Cilantro +
            Salsa Roja +Fire Roasted Corn + Black Beans + Fried Rice + Four
            Blend Cheese + Sesame Seeds
          </p>
          <p class="title red--text">Korean BBQ Rice Plate</p>
          <p class="subheading">
            Cabbage + Carrots + Green Onions + Sesame Seeds + Side of White Rice
            or Fried Rice
          </p>
          <p class="title red--text">Quesadilla</p>
          <p class="subheading">
            Flour Tortilla + Signature Four Blend Cheese + Cilantro
          </p>
          <p class="title red--text">Kimchi Fried Rice</p>
          <p class="subheading">
            Pan Fried Kimchi + Cabbage + Carrots + Rice + Pepper Paste Sauce +
            Sesame Seed + Green Onions + Eggs
          </p>
          <p class="title red--text">Steak N' Cheese</p>
          <p class="subheading">
            Toasted White Hoagie Bread + Swiss American Cheese + Sesame Aioli +
            Caramelized Onions
          </p>
          <p class="title red--text">Bul-Dogs</p>
          <p class="subheading">
            Toasted White Hoagie Bread + All Beef Hotdog + Four Blend Cheese +
            Asian Slaw + Onion Cilantro Lime Juice Mix + Tomato + Cilantro +
            Sesame Seed + Salsa Roja
          </p>
          <p class="title red--text">Bibimbap</p>
          <p class="subheading">
            White Rice + Sesame Oil + Fresh Arugula + Sautéed Zucchini + Sautéed
            Carrots + Pickled Daikon Radish + Seasoned Blenched Bean Sprouts +
            Eggs + Sesame Seed + Side of Gochujang (Pepper Paste Sauce)
          </p>
        </v-layout>
      </v-flex>
      <v-flex xs12 md4>
        <v-layout column pa-4 ma-1 class="menu-step">
          <h3 class="display-2 red--text text-uppercase">
            Step 3:
          </h3>
          <h4 class="display-1 red--text mb-5 text-uppercase">
            Choose Your Add-Ons
          </h4>
          <p class="subheading">
            Top your dishes with <strong>PAN FRIED KIMCHI</strong> to add a
            punch!
          </p>
          <p class="subheading">
            Add an <strong>EGG</strong> to make your dish breakfast anytime of
            the day!
          </p>
          <p class="title red--text">Side Orders</p>
          <p class="subheading">
            <strong>Goon Mandoo</strong> – Korean Pan Fried Dumplings
            (Vermicelli Noodles + Scallions + Tofu + Minced Pork & Beef + Green
            Onions)
          </p>
          <p class="subheading">
            <strong>Fresh Kimchi</strong> – Spicy Pickled Nappa Cabbage
          </p>
          <p class="subheading">
            White Rice
          </p>
          <p class="subheading">
            Fried Rice
          </p>
          <p class="title red--text">Drinks</p>
          <p class="subheading">
            Jaritos (Mexican Bottled Soda), Bottled Tea, Bottled Water, Can
            Soda, Korean Drinks
          </p>
          <p class="title red--text">Seasonal Special</p>
          <p class="subheading">
            <strong>Galbi Basket</strong> - Marinated Short Ribs + Spring Mix +
            Green Onions + Sesame Seeds + Side of White Rice or Fried Rice Side
            + Side of Pepper Paste Sauce
          </p>
          <p class="subheading">
            <strong>Joe's Special</strong> - Fried Rice + Goon Mandoo + Choice
            of Korean BBQ + Pan Fried Kimchi + Four Blend Cheese + Egg + Green
            Onions + Sesame Seeds + Spicy Aioli + Spicy Sauce
          </p>
          <p class="subheading">
            <strong>Ho Dduk (Korean Griddle Cake)</strong> - Rice Flour Batter +
            Honey + Fine Ground Assorted Nut Mix + Sweet Sesame Paste
          </p>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.menu-step {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3%;
}
</style>
