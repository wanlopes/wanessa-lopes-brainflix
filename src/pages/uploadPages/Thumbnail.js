import React from "react";
import thumbnailimage from "../../assets/Images/Upload-video-preview.jpg"

function Thumbnail() {
    return (
      <div>
        <div className="thumbnail">
          <div className="thumbnail__title">
            <h2 className="thumbnail__title__name">VIDEO THUMBNAIL</h2>
          </div>
          <div>
            <img src={thumbnailimage} alt="thumnail-image" />
          </div>
        </div>
        <div className="form">
          <div className="form__container">
            <div className="form__title">
              <h2 className="form__title__name">TITLE YOUR VIDEO</h2>
            </div>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Add a title to your video"
                ></input>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>ADD A VIDEO DESCRIPTION</h2>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Add a description to your video"
              ></input>
            </form>
          </div>
        </div>
        <div>
          <button>PUBLISH</button>
        </div>
        <div>
          <button>CANCEL</button>
        </div>
      </div>
    );
}

export default Thumbnail;