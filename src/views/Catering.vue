<template>
  <v-container fluid fill-height grid-list-md text-xs-center>
    <v-layout row wrap justify-space-around>
      <v-flex xs12>
        <v-layout row justify-center>
          <v-btn
            large
            color="error"
            href="https://www.ezcater.com/catering/pvt/bulkogi-truck-1"
            target="_blank"
            >Order Now</v-btn
          >
          <v-btn
            large
            color="primary"
            href="http://www.bulkogikrnbbq.com/wp-content/uploads/2017/02/BulkogiCatering.pdf"
            target="_blank"
            >Download Menu</v-btn
          >
        </v-layout>
      </v-flex>
      <v-flex xs12 md10>
        <v-layout column pa-4 ma-1 class="catering">
          <!-- A LA CARTE SECTION -->
          <h4 class="display-1 red--text text-uppercase">
            A La Carte Menu
          </h4>
          <p class="subheading font-weight-bold font-italic">
            All our a la carte menu items below are served with our sauces:
          </p>
          <p class="subheading">
            Gochujang Sauce (Korean pepper paste), Spicy Aioli (Creamy Spicy),
            Bulkogi Spicy Sauce (Our version of sriracha), Mandoo Sauce (Sweet
            and sour soy sauce)
          </p>
          <p class="title red--text">Korean BBQ</p>
          <p class="subheading">
            <strong>Beef Bulkogi</strong> - Sweet and savory soy sauce based
            marinated rib-eye grilled with caramelized onions. Half Pan (Serves
            ~15)
          </p>
          <p class="subheading">
            <strong>Spicy Pork Bulkogi</strong> - Spicy, sweet and savory
            gochujang (Korean pepper paste) based marinated pork belly grilled
            with caramelized onions. Half Pan (Serves ~10)
          </p>
          <p class="subheading">
            <strong>Chicken Bulkogi</strong> - Sweet and savory soy sauce based
            chicken grilled with caramelized onions. Half Pan (Serves ~10)
          </p>
          <p class="subheading">
            <strong>Galbi</strong> - Sweet and savory soy sauce based marinated
            bone-in beef short ribs grilled with caramelized onions. Half Pan
            (Serves ~10)
          </p>
          <p class="title red--text">Hot Dishes</p>
          <p class="subheading">
            <strong>Japchae</strong> - Potato Vermicelli Noodles stir fried in
            soy sauce with bell peppers, shiitake mushrooms, fish cakes,
            carrots, and spinach. Half Pan (Serves 15-20)
          </p>
          <p class="subheading">
            <strong>Vegetable Pancakes</strong> - Pan-fried rice flour based
            batter with carrots, zucchinis and green onions. Half Pan (Serves
            15-20)
          </p>
          <p class="subheading">
            <strong>Kimchi Pancakes</strong> - Pan-fried rice flour based batter
            with Kimchi. Half Pan (Serves 15-20)
          </p>
          <p class="subheading">
            <strong>Goon Mandoo</strong> - Pan-fried dumplings filled with
            minced beef, minced pork, tofu, vermicelli noodles, and scallions.
            Half Pan (Serves 15-20)
          </p>
          <p class="subheading">
            <strong>Dduck Bbok Gi</strong> - Korean Rice cake simmered in spicy
            pepper paste sauce with vegetables, fish cakes and hard-boiled eggs.
            (Serves 10-15)
          </p>
          <p class="subheading">
            <strong>Korean BBQ Quesadilla</strong> - Korean BBQ on flour
            tortilla with our signature blend cheese. Half Pan (Serves 10-15)
          </p>
          <p class="subheading">
            <strong>Fried Rice</strong> - Extra fancy long grain rice stir-fried
            with specially rendered soy sauce. Half Pan (Serves 10-15)
          </p>
          <p class="subheading">
            <strong>White Rice</strong> - Steamed Extra Fancy White Rice Half
            Pan (Serves 10-15)
          </p>
          <p class="title red--text">Cold Dishes</p>
          <p class="subheading">
            <strong>Kimchi</strong> - National Dish of Korea. Pickled Napa
            Cabbage in spicy pepper paste. Half Pan (Serves 15-20)
          </p>
          <p class="subheading">
            <strong>Seasoned Bean Sprouts</strong> - Blanched bean sprouts
            seasoned with sesame oil, light salt and Korean crushed peppers.
            Half Pan (Serves 15-20)
          </p>
          <p class="subheading">
            <strong>Asian Slaw</strong> - Shredded Cabbage, spring mix tossed in
            vinegar, sugar, sesame oil, olive oil and hint of pepper flakes.
            Half Pan (Serves 15-20)
          </p>
          <p class="subheading">
            <strong>Asian Ginger Salad</strong> - Spring mix, pecans, tangerine
            and tomatoes served with our signature ginger-orange dressing on the
            side. Half Pan (Serves 10-15)
          </p>
          <!-- KOREAN BBQ FUSION BAR SECTION -->
          <h4 class="display-1 red--text text-uppercase">
            Korean BBQ Fusion Bar
          </h4>
          <p class="subheading font-weight-bold font-italic">
            (Minimum 10 orders)
          </p>
          <p class="subheading">
            <strong>Make your own Korean BBQ Tacos</strong> (3 tacos/ person) or
            <strong>Burrito Bowl</strong> w/ side of tortilla chips
          </p>
          <p class="subheading">
            <strong>Choice of two types of Korean BBQ</strong> – Beef Bulkogi,
            Chicken Bulkogi, Spicy Pork Bulkogi
          </p>
          <p class="subheading">
            <strong>4 Sauces</strong> – Spicy Aioli (Creamy Spicy), Bulkogi
            Spicy Sauce (Our version of sriracha), Mandoo Sauce (Sweet and sour
            soy sauce), Salsa Roja (Blended tomato based medium-spicy salsa)
          </p>
          <p class="subheading">
            <strong>Choice of Ingredients</strong> – Corn Tortilla, Fried Rice,
            Asian Slaw, Onion-Cilantro Ceviche, Chopped tomato, Fire Roasted
            Corn, Black Beans
          </p>
          <!-- KOREAN BBQ TRADITIONAL BAR SECTION -->
          <h4 class="display-1 red--text text-uppercase">
            Korean BBQ Traditional Bar
          </h4>
          <p class="subheading font-weight-bold font-italic">
            (Minimum 15 orders)
          </p>
          <p class="subheading">
            <strong>Choice of two types of Korean BBQ</strong> – Beef Bulkogi,
            Chicken Bulkogi, Spicy Pork Bulkogi
          </p>
          <p class="subheading">
            <strong>4 Sauces</strong> – Gochujang Sauce (Korean pepper paste),
            Spicy Aioli (Creamy Spicy), Bulkogi Spicy Sauce (Our version of
            sriracha), Mandoo Sauce (Sweet and sour soy sauce)
          </p>
          <p class="subheading">
            <strong>Choice of Ingredients</strong> – White Rice, Kimchi,
            Blanched & Seasoned Bean Sprouts, Japchae, Korean Vegetable Pancakes
          </p>
          <!-- BIBIMBAP BAR SECTION -->
          <h4 class="display-1 red--text text-uppercase">
            Bibimbap Bar
          </h4>
          <p class="subheading font-weight-bold font-italic">
            (Minimum 10 orders)
          </p>
          <p class="subheading font-italic">
            A Traditional Korean Dish. Bed of white rice on a bowl with variety
            of vegetables on top.
          </p>
          <p class="subheading">
            <strong>Choice of two types of Korean BBQ</strong> – Beef Bulkogi,
            Chicken Bulkogi, Spicy Pork Bulkogi
          </p>
          <p class="subheading">
            <strong>4 Sauces</strong> – Gochujang Sauce, Spicy Aioli, Bulkogi
            Spicy Sauce, Mandoo Sauce
          </p>
          <p class="subheading">
            <strong>Choice of Ingredients</strong> – White Rice, Pickled Radish,
            Sautéed Carrots, Sautéed Zucchini, Blanched & Seasoned Bean Sprouts,
            Spring Mix, Fried Eggs
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
.catering {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>
