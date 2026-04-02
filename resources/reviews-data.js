/* Shared review data (used by index.html and reviews.html) */
const reviews = [
  {
    rating: 5,
    title: "Jared was awesome to talk to and work with!",
    text: "He was very patient and understanding and even sent me some resources on how to get the full use out of my Xbox! As a retro gamer and someone who is wanting to experience games that I never could when I was younger, this has been one of the coolest and best retro gaming purchases I've ever made!"
  },
  {
    rating: 5,
    title: "Awesome service and best condition ever.",
    text: "He is super focused on doing the best job possible, after not being able to play it in about 10 years my Xbox is now in the best shape it’s ever been."
  },
  {
    rating: 5,
    title: "Really cool dude with clear explanations.",
    text: "He laid out everything I needed to know about the console and everything the console can do! I highly recommend buying from Jared if you're looking for restored and modified Xbox originals!"
  },
  {
    rating: 5,
    title: "The Xbox he customized is awesome!",
    text: "Going to refer others to him!"
  },
  {
    rating: 5,
    title: "Excellent in every way.",
    text: "Excellent in every way"
  },
  {
    rating: 5,
    title: "Awesome seller, easy to work with!",
    text: "Awesome seller, easy to work with!"
  }
];

function starString(rating) {
  const full = '★'.repeat(Math.floor(rating));
  const empty = '☆'.repeat(Math.max(0, 5 - Math.floor(rating)));
  return full + empty;
}
