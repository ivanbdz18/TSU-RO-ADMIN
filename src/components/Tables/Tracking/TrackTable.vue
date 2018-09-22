<template>
  <div>
    <md-steppers md-vertical>
          <md-step id="first" md-label="Faculty Researcher">
                <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <md-step id="second" md-label="Department Research Coordinator">
                <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step>

          <md-step id="third" md-label="Faculty Researcher">
                <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <md-step id="fourth" md-label="College Research Evaluation Committee">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
                  </md-table-row>
                </md-table>
            <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step>

          <md-step id="fifth" md-label="Department Research Coordinator">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  </md-table-row>
                </md-table>
            <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step>

          <md-step id="sixth" md-label="Faculty Researcher">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <md-step id="seventh" md-label="UREC">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <md-step id="eight" md-label="University Research Office">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <md-step id="ninth" md-label="Faculty Researcher">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <md-step id="tenth" md-label="Research Ethics and Review Committe">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
              </md-table-row>
            </md-table>
            <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step>

          <md-step id="eleventh" md-label="Faculty Researcher">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <md-step id="twelfth" md-label="University Research Office">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step>

          <md-step id="thirteenth" md-label="Office of The University President">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  </md-table-row>
                </md-table>
            <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step>

          <md-step id="fourteenth" md-label="University Research Office">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  <md-table-cell md-label="Funding">{{ item.funding }}</md-table-cell>
                  </md-table-row>
                </md-table>
            <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step>

          <!-- <md-step id="fifteenth" md-label="University Research Office">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in InHouse Review">{{ item.gradeIn }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  <md-table-cell md-label="Funding">{{ item.funding }}</md-table-cell>
                  </md-table-row>
                </md-table>
            <md-table v-model="users" table-header-color="orange">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">
                      <md-table-cell md-label="Comments">{{ item.comments }}</md-table-cell>
                    </md-table-row>
            </md-table>
          </md-step> -->

          <md-step id="fifteenth" md-label="Faculty Rsearcher">
            <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Time Posted">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Time Released">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
                  <md-table-cell md-label="Incentives">{{ item.incentive }}</md-table-cell>
                  <md-table-cell md-label="University Research Agenda">{{ item.univAgenda }}</md-table-cell>
                  <md-table-cell md-label="Funding">{{ item.funding }}</md-table-cell>
                  </md-table-row>
                </md-table>
          </md-step>

          <!-- <md-step id="fourteenth" md-label="PUBLICATION">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          </md-step>

          <md-step id="fifteenth" md-label="PRESENTATION">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          </md-step>

          <md-step id="sixteenth" md-label="COMPETITION">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          </md-step>

          <md-step id="seventeenth" md-label="CITATION">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          </md-step> -->
    </md-steppers>
  </div>
</template>

<script>
import {
  CcsDept
} from '@/components'

export default {
  components: {
    CcsDept
  },
  name: 'track-table',
  data () {
    return {
      selected: [],
      users: [
        {
          posted: '01/01/2018 12:30pm',
          released: '01/01/2018 12:30pm',
          comments: 'Hello World'
        }
      ]
    }
  }
}
</script>
