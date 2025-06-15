import Home from "../images/Home.png";
import About from "../images/About.png";
import Contact from "../images/Contact.png";
import Latest from "../images/Latest.png";
import Global from "../images/Global.png";

export const accordionData = {
  1: {
    title: "The Role of Design",
    content: {
      1: "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
      2: "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.",
    },
  },
  2: {
    title: "Time for Change",
    content: {
      1: "Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.",
      2: "It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.",
      3: "This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.",
      4: "And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.",
    },
  },
  3: {
    title: "Act with Urgency",
    content: {
      1: "We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.",
      2: "This is the most important brief of our lives. Join us as we begin to design a climate-positive future.",
    },
  },
};

export const donateBtns = ["Donate £10", "Donate £20", "Donate £50"];

export const emergencyActsData = [
  {
    id: 1,
    title: "Sound the Alarm",
    description:
      "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
  },
  {
    id: 2,
    title: "Start the Journey",
    description:
      "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    id: 3,
    title: "Bring Clients with Us",
    description:
      "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
  },
  {
    id: 4,
    title: "Measure What We Make",
    description:
      "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
  },
  {
    id: 5,
    title: "Redefine ‘Good’",
    description:
      "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
  },
  {
    id: 6,
    title: "Educate, Accelerate",
    description:
      "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
  },
  {
    id: 7,
    title: "Design for Justice",
    description:
      "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
  },
  {
    id: 8,
    title: "Amplify Voices for Change",
    description:
      "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
  },
];

export const formCheckBox1 = [
  {
    id: 1,
    label: "As a business",
  },
  {
    id: 2,
    label: "As a individual",
  },
  {
    id: 3,
    label: "As an individual",
  },
  {
    id: 4,
    label: "As a team or department",
  },
];

export const formCheckBox2 = [
  {
    id: 1,
    label:
      "I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.",
  },
  {
    id: 2,
    label:
      "I would like to be added to the Design Declares! newsletter and receive further updates.",
  },
];

export const formFields = [
  {
    name: "institutionName",
    placeholder: "Institution Name:*",
    label: "Institution Name",
    required: true,
  },
  {
    name: "website",
    placeholder: "Website:*",
    label: "Website:*",
    required: true,
  },
  {
    name: "country",
    placeholder: "Country:*",
    label: "Country:",
    required: true,
  },
  {
    name: "discipline",
    placeholder: "Discipline:*",
    label: "Discipline:",
    required: true,
  },
  {
    name: "email",
    placeholder: "Email:*",
    label: "Email:",
    required: true,
  },
  {
    name: "declarationReason",
    placeholder: "",
    label:
      "Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares.",
    multiline: true,
    rows: 8,
    helperText: "Please fill in this field.",
    required: true,
  },
];

export const menuItems = [
  { label: "Home", icon: Home },
  { label: "About", icon: About },
  { label: "Latest", icon: Latest },
  { label: "Contact", icon: Contact },
  { label: "Chose Global Chapter", icon: Global },
];
