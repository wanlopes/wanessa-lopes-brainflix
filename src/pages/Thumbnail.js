import React from "react";

function Thumbnail() {
    return (
      <div>
        <div>
          <h2>VIDEO THUMBNAIL</h2>
        </div>
        <div>
          <div>
            <div>
              <h2>TITLE YOUR VIDEO</h2>
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