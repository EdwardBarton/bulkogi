<template>
  <v-container fluid grid-list-md text-xs-center fill-height>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-layout column fill-height justify-center align-center>
          <div class="where pa-4">
            <iframe
              src="https://calendar.google.com/calendar/embed?title=Bulkogi%20Food%20Truck&amp;showPrint=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=500&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=edward%40projectshift.io&amp;color=%231B887A&amp;ctz=America%2FNew_York"
              style="border:solid 1px #777"
              width="750"
              height="500"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.where {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
}
</style>
