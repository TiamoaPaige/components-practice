function PersonCard({ name, age, occupation = "unemployed" }) {
  return (
    <>
      <h2>{name}</h2>
      <p>Age:{age}</p>
      <p>Occupation {occupation}</p>
    </>
  );
}
export default PersonCard;
