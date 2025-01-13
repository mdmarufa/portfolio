import List from "../list/List";
import P from "../text/p/P";

const DetailsMilstone = () => {
  return (
    <div className="details">
    <P bold={true} colorize={true} >Payment Structure</P>
    <List m={20} title={"Milestone-Based Payment:"} des={"Payments are structured around project milestones, ensuring clarity and accountability for both parties."} />
    <List m={20} title={"Working Rate:"} des={"Pricing is calculated in USD and varies based on the complexity and time required for development."} />
    <List m={40} title={"Frontend:"} des={"Rates depend on the development time, complexity, and design intricacies of each web page."} />
    <List m={40} title={"Backend:"} des={"Rates are based on the functionality's complexity and the development time required to implement it."} />

    <br />

    <P bold={true}>Availability</P>
    <List m={20} des={"I’m available any time within 24 hours to accommodate your needs."} />

    <br />

    <P bold={true}>Working Hours</P>
    <List m={20} des={"Maximum: 10 hours per day"} />
    <List m={20} des={"Minimum: 8 hours per day"} />
    <div className="sl"></div>
    <P bold={true} m={20}>I adjust my working schedule to align with your project needs and ensure timely delivery.</P>

    <br />

    <P bold={true}>Delivery and Workflow</P>
    <List m={20} title={"Delivery Timelines:"} des={"Delivery times are customized based on the project scope and complexity, with regular updates provided to keep you informed of progress."} />
    <List m={20} title={"Workflow"} />
    <List m={40} typeNone={true} des={"1. Detailed discussion of project requirements."} />
    <List m={40} typeNone={true} des={"2. Development divided into milestones with estimated timelines."} />
    <List m={40} typeNone={true} des={"3. Regular communication for updates, feedback, and revisions."} />
    <List m={40} typeNone={true} des={"4. Final delivery upon approval of all milestones."} />

    <br />

    <P bold={true}>Communication</P>
    <List m={20} title={"Open for communication via email, or messaging platforms like WhatsApp or Facebook to address queries and provide updates promptly."} />

    <br />

    <P bold={true}>Additional Notes</P>
    <List m={20} title={"Revisions:"} des={"Includes up to 2 free revisions per milestone to ensure satisfaction. Additional revisions can be discussed at a reasonable rate."} />


  </div>
  )
}

export default DetailsMilstone;