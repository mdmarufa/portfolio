import List from "../list/List";
import P from "../text/p/P";

const DetailsHourly = () => {
  return (
    <div className="details">
    <P bold={true} colorize={true} >Hourly Rate</P>
    <List m={20} des={"Minimum: $5 per hour"} />
    <List m={20} des={"Maximum: Based on project complexity"} />
    <div className="sl"></div>
    <P bold={true} m={20}>Pricing is calculated in USD and depends on the scope and development time required for both front-end and back-end tasks.</P>

    <br />

    <P bold={true}>Availability</P>
    <List m={20} des={"I’m available any time within 24 hours to accommodate your needs."} />

    <br />

    <P bold={true}>Working Hours</P>
    <List m={20} des={"Maximum: 10 hours per day"} />
    <List m={20} des={"Minimum: 8 hours per day"} />
    <div className="sl"></div>
    <P m={20} bold={true}>Flexible hours to match the client's preferred schedule.</P>

    <br />

    <P bold={true}>Delivery</P>
    <List m={20} title={"Standard Delivery Time:"} des={"Delivery timelines vary based on the project's size and complexity. For smaller tasks, I aim to deliver within 2-5 business days. Larger or more complex projects will have customized delivery schedules aligned with client expectations"} />
    <List m={20} title={"Commitment:"} des={"I prioritize quality and ensure timely delivery by adhering to agreed-upon deadlines."} />
    <List m={20} title={"Updates"} des={"Regular updates will be shared during the development process to keep you informed about progress."} />
  </div>
  )
}

export default DetailsHourly;