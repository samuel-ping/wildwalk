import React, { Component } from "react";
import axios from "axios";
import TopMenu from "../TopMenu";
import ImageUploader from "react-images-upload";
import { AiFillCamera as CameraIcon } from "react-icons/ai";
import { FaCloudUploadAlt as UploadIcon } from "react-icons/fa";
import { toast } from "react-toastify";
import "./SubmitDiscovery.css";

class SubmitDiscovery extends Component {
  constructor(props) {
    super(props);
    this.state = { speciesName: null, originalPhoto: null, base64Image: null };
    this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({ speciesName: event.target.value });
  };

  // handleUpload = (event) => {
  //   console.log("photo uploaded");
  //   console.log("speciesName:", this.state.speciesName);
  //   this.setState({ originalPhoto: event.target.files[0] });
  // };

  onDrop(pictureFiles) {
    this.setState({
      originalPhoto: pictureFiles[0],
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("ORIGINALBPHOTO:", this.state.originalPhoto);
    this.getBase64(this.state.originalPhoto, (res) => {
      this.setState({ base64Image: res });

      const entry = {
        speciesName: this.state.speciesName,
        photo: this.state.base64Image,
      };

      console.log(entry);

      axios
        .post("/speciesEntry/add", entry)
        .then((res) => {
          console.log(res.data);
          toast.success("Entry successfully added!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error in converting file to base64: ", error);
    };
  }

  render() {
    return (
      <div>
        <TopMenu />

        {/* Directions */}
        <ul className="instructions">
          <li>
            1. Enter the name of the species. To check the species, try checking
            the native species near you in the Dashboard tab.
          </li>
          <li>2. Upload or take a photo of the species you found.</li>
          <li>3. Tap the "Add Entry" button.</li>
          <li>4. Check the Collection tab to see your entry.</li>
        </ul>

        <div className="entry-form-wrapper">
          {/* Add Species Name Field */}
          <label className="species-name-field">Species Name:</label>
          <input type="text" required onChange={this.handleNameChange} />

          {/* Upload Photo Button */}
          {/* <label htmlFor="input-photo" className="button">
            <div className="icon">
              <CameraIcon />
            </div>
            <div className="text">Upload Photo</div>
          </label>
          <input
            id="input-photo"
            type="file"
            accept="image/*"
            onClick={this.handleUpload}
          /> */}

          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            singleImage="true"
          />

          {/* Submit Button */}
          <label
            onClick={this.handleSubmit}
            htmlFor="submit-entry"
            className="button"
            id="submit"
          >
            <div className="icon">
              <UploadIcon />
            </div>
            <div className="text">Add Entry</div>
          </label>
          <input id="submit-entry" type="button" />
        </div>
      </div>
    );
  }
}

export default SubmitDiscovery;
