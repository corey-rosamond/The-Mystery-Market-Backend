import React from "react";
import styled from "styled-components";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import app from "../firebase";

const Container = styled.div`
  flex: 7;
  padding: 10px 20px 10px 20px;
`;

const Image = styled.img`
  height: 100px;
  width:100px;
  border: 1px solid red;
  margin: 10px;
`;


class ProductAddPageComponent extends React.Component
{
  imageMap = [
    {photoName: 'photo_1', previewName: "preview_1"},
    {photoName: 'photo_2', previewName: "preview_2"},
    {photoName: 'photo_3', previewName: "preview_3"},
    {photoName: 'photo_4', previewName: "preview_4"},
    {photoName: 'photo_5', previewName: "preview_5"},
    {photoName: 'photo_6', previewName: "preview_6"}
  ];

  constructor(props)
  {
    super(props);
    this.state = {
      name: "",
      description: "",
      purchased_at: null,
      selling_at: null,
      sell_at: null,
      link: null,
      quantity: 0,

      photo_1: null,
      photo_2: null,
      photo_3: null,
      photo_4: null,
      photo_5: null,
      photo_6: null,

      preview_1: null,
      preview_2: null,
      preview_3: null,
      preview_4: null,
      preview_5: null,
      preview_6: null
    };
  }

  onSubmit(event)
  {
    const _id = "abcd";
    try
    {
      event.preventDefault();



      // This is the image upload portion this should be done after we have a product id
      this.imageMap.map((targetData) => {
        let {photoName, previewName} = targetData;

        if(this.state[photoName] !== null)
        {
          this.uploadImage(photoName)
        }
      });



    } catch(error)
    {
      console.log(error)
    }
  }

  uploadImage(targetName)
  {
    console.log(targetName)

    let fileName = new Date().getTime() + this.state[targetName].name;
    let storage = getStorage(app);
    let storageRef = ref(storage, fileName);
    let uploadTask = uploadBytesResumable(storageRef, this.state[targetName]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log("upload failed")
      },
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          this.setState({
            preview_1: downloadURL
          });
        });
      }
    );
  }

  onChange(event)
  {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onChangeDollar(event)
  {

    this.onChange(event);
  }

  onChangeInteger(event)
  {
    if(isNaN(event.target.value))
    {
      event.target.value = event.target.value.slice(0, -1);
    }
    this.onChange(event);
  }

  onFileChange(event)
  {
    function isFileImage(file) {
      return file && file['type'].split('/')[0] === 'image';
    }
    if(!isFileImage(event.target.files[0]))
    {
      event.target.value = "";
    } else {
      let element = this.imageMap.find(o => o.photoName === event.target.name);
      let {photoName, previewName} = element;
      this.setState({
        [photoName]: event.target.files[0]
      });
      this.setState({
        [previewName]: URL.createObjectURL(event.target.files[0])
      })
    }
  }

  render()
  {

    return (
      <Container>
        <form method="post" onSubmit={(event)=>this.onSubmit(event)}>
          <label htmlFor="name">
            Name:
          </label>
          <input type="text" name="name" onChange={(event) => this.onChange(event)} />
          <br />

          <label htmlFor="description">
            Description:
          </label>
          <textarea id="description" name="description" onChange={(event) => this.onChange(event)} />
          <br />

          <label htmlFor="purchased_at">
            Purchased At:
          </label>
          <input type="text" name="purchased_at" onChange={(event) => this.onChangeDollar(event)} />
          <br />

          <label htmlFor="selling_at">
            Selling At:
          </label>
          <input type="text" name="selling_at" onChange={(event) => this.onChangeDollar(event)} />
          <br />

          <label htmlFor="sell_at">
            Sell At:
          </label>
          <input type="text" name="sell_at" onChange={(event) => this.onChangeDollar(event)} />
          <br />

          <label htmlFor="link">
            Link:
          </label>
          <input type="text" name="link" onChange={(event) => this.onChange(event)}/>
          <br />

          <label htmlFor="quantity">
            Quantity:
          </label>
          <input type="text" name="quantity" onChange={(event) => this.onChangeInteger( event)} />
          <br />

          <label htmlFor="photo_1">
            Photo 1:
          </label>
          <input type="file" name="photo_1" onChange={(event) => this.onFileChange(event)} />
          <br />

          <label htmlFor="photo_2">
            Photo 2:
          </label>
          <input type="file" name="photo_2" onChange={(event) => this.onFileChange(event)} />
          <br />

          <label htmlFor="photo_3">
            Photo 3:
          </label>
          <input type="file" name="photo_3" onChange={(event) => this.onFileChange(event)} />
          <br />

          <label htmlFor="photo_4">
            Photo 4:
          </label>
          <input type="file" name="photo_4" onChange={(event) => this.onFileChange(event)} />
          <br />

          <label htmlFor="photo_5">
            Photo 5:
          </label>
          <input type="file" name="photo_5" onChange={(event) => this.onFileChange(event)} />
          <br />

          <label htmlFor="photo_6">
            Photo 6:
          </label>
          <input type="file" name="photo_6" onChange={(event) => this.onFileChange(event)} />
          <br />

          <button type="submit">
            Add Product
          </button>
          <br />

          <Image src={this.state.preview_1}/>
          <Image src={this.state.preview_2}/>
          <Image src={this.state.preview_3}/>
          <Image src={this.state.preview_4}/>
          <Image src={this.state.preview_5}/>
          <Image src={this.state.preview_6}/>

        </form>
      </Container>
    );
  }
}

export default ProductAddPageComponent;