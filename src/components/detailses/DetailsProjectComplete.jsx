import List from "../list/List";
import P from "../text/p/P";

const DetailsCompleteProject = () => (
  <div className="detailsProject details">
  <P bold={true} colorize={true} >Payment Structure</P>
  <List m={20} title={"Project-Based Payment:"} des={"Pricing is determined on a per-project basis, ensuring transparency and alignment with client requirements"} />
  <List m={20} title={"Working Rate:"} des={"Calculated in USD, with rates varying based on:"} />
  <div className="sl"></div>
  <List m={20} title={"Frontend Development:"} des={"Influenced by the complexity, design, and development time of the project."} />
  <List m={20} title={"Backend Development:"} des={"Dependent on the complexity of functionalities and the time required for implementation."} />

  <br />

  <P bold={true}>Availability</P>
  <List m={20} des={"I am flexible and available to work any time within 24 hours, tailored to the client's preferences."} />

  <br />

  <P bold={true}>Working Hours</P>
  <List m={20} des={"Maximum: 10 hours per day"} />
  <List m={20} des={"Minimum: 8 hours per day"} />

  <div className="sl"></div>
  <P bold={true}>My working hours are adaptable to ensure project milestones are met on time.</P>

  <br />

  <P bold={true}>Delivery and Timelines</P>            
  <List m={20} title={"Tailored Delivery Schedules:"} des={"Delivery timelines are customized based on the scope and complexity of your project. I work closely with clients to establish clear deadlines for each phase of development."} />
  <List m={20} title={"Milestone-Based Delivery:"} des={"For larger projects, I divide the work into milestones, ensuring consistent progress updates and timely completion of each stage."} />
  <List m={20} title={"Standard Turnaround:"} des={"Smaller projects are typically delivered within 2-5 business days, while more complex projects require a detailed timeline agreed upon with the client."} />
  <List m={20} title={"On-Time Delivery Guarantee:"} des={"I am committed to meeting agreed-upon deadlines while maintaining the highest quality standards."} />

  <br />

  <P bold={true} >Delivery and Timelines</P>
  <List m={20} typeNone={true} title={"1. Initial Planning:"} des={"Detailed discussions to understand your requirements and set clear goals."} />
  <List m={20} typeNone={true} title={"2. Development:"} des={"Systematic execution with regular updates to keep you informed."} />
  <List m={20} typeNone={true} title={"3. Quality Assurance:"} des={"Rigorous testing to ensure functionality, performance, and compatibility."} />
  <List m={20} typeNone={true} title={"4. Final Delivery:"} des={"Comprehensive project handoff, including all source files and documentation."} />

  <div className="sl"></div>

  <List m={0} typeNone={true} title={"Post-Delivery Support:"} des={" I offer up to 30 days of support after delivery to address any minor tweaks or adjustments."} />

  
</div>
);

export default DetailsCompleteProject;