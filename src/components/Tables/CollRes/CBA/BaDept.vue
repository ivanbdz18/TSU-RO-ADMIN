<template>
  <div>
    <md-button @click="goBack" class="md-raised md-danger">Go Back</md-button>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Track No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button to="tracking" class="md-just-icon md-simple md-primary">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip md-direction="bottom">View Tracking</md-tooltip>
          </md-button>
          <md-button to="progressreport" class="md-just-icon md-simple md-primary">
            <md-icon>ballot</md-icon>
            <md-tooltip md-direction="bottom">Progress Report</md-tooltip>
          </md-button>
          <md-button to="fullresdetail" class="md-just-icon md-simple md-primary">
            <md-icon>assignment</md-icon>
            <md-tooltip md-direction="bottom">Full Research Detail</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script> // TODO
export default {
  name: 'ba-dept',
  data () {
    return {
      selected: [],
      users: [
        {
          tracking_number: '01ds6420-8e9d-651b',
          title: 'Predicting stock returns with Twitter: A test of semi-strong form EMH'
        },
        {
          tracking_number: '12hd6235-a6s8-153s',
          title: 'Empirical Analysis of the Relationship between Sources of Foreign exchange Reserve and Price  Fluctuation in China'
        },
        {
          tracking_number: '12hd6654-a6s8-753d',
          title: 'The American Dream—Deferred'
        },
        {
          tracking_number: '12sd5124-a6s8-753d',
          title: 'Uncertainty in measuring Sustainable Development: An application for the Sustainability-adjusted HDI'
        },
        {
          tracking_number: '35op6593-a6d1-5s4d',
          title: 'Looking Towards an Economic Recovery Accompanied with Higher Post-Secondary Aspirations and Attainment'
        },
        {
          tracking_number: '91ip6231-8o6s-8d5s',
          title: 'Can Online Word of Mouth Assign a Product Price?'
        },
        {
          tracking_number: '65pd6118-9i4d-546j',
          title: 'Tracking Shopping Behavior at the Point of Purchase'
        },
        {
          tracking_number: '80cd9201-7e2e-457b',
          title: 'Dynamic Embedding and Speculation: A Cointegration Analysis of Food Prices '
        },
        {
          tracking_number: '80cd9201-7e2e-457b',
          title: 'Statistical Arbitrage Strategies and Profit Potential in Commodity Futures Market'
        },
        {
          tracking_number: '80cd9201-7e2e-457b',
          title: 'The Effect of Variety-Seeking in Store Choice on Brand Seeking'
        },
        {
          tracking_number: '80cd9201-7e2e-457b',
          title: 'An Approach to Lending with Heterogeneous Borrowers'
        },
        {
          tracking_number: '80cd9201-7e2e-457b',
          title: 'Running Head: Pricing and Microfinance',
          author: null
        },
        {
          tracking_number: '80cd9201-7e2e-457b',
          title: null,
          author: null
        }
      ]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
