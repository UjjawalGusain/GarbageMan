import axios from "axios";

const getSignedUp = async (userData, signUp) => { 
  const { name, email, uid, userCredential, phoneNumber, location, address } = userData;

  try {
    // console.log(`Location2: ${location}`);
    // console.log(`Phone number: ${phoneNumber}`);
    const idToken = await userCredential.user.getIdToken();

    await axios.post("http://localhost:8000/api/v1/user/signup", {
      name,
      email,
      phoneNumber,
      uid,
      location: {
        coordinates: {
          type: "Point",
          coordinates: [location.longitude, location.latitude]
        },
        address: address ? address : "Unknown"  
        },
      idToken
    });

    console.log("User registered successfully");
  } catch (error) {
    console.error("Signup failed:", error.message);
  }
};

export { getSignedUp };
