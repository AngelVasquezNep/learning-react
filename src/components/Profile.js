const Maryoris = {
  name: 'Maryoris',
  age: 32,
  country: 'Venezuela',
}

const { name, age, country } = Maryoris

// const name = Maryoris.name
// const age = Maryoris.age
// const country = Maryoris.country

// const image = "MK3eW3A"
// "https://i.imgur.com/" + image + "s.jpg"
// `https://i.imgur.com/${image}s.jpg`

               //     props
function Profile({ image, name }) {
  return (
    <figure>
      <img
        src={`https://i.imgur.com/${image}s.jpg`}
        alt={name}
        className="avatar"
      />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default Profile
