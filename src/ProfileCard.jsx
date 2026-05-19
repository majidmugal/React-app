import React from "react";

function ProfileCard({ name, photo, description }) {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.image} />
      
      <h2 style={styles.name}>{name}</h2>
      
      <p style={styles.desc}>{description}</p>

      <button style={styles.button}>Follow</button>
    </div>
  );
}

export default ProfileCard;
    
const styles = {
  card: {
    width: "280px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    margin: "10px 0 5px",
  },
  desc: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#3897f0",
    color: "#fff",
    cursor: "pointer",
  },
};