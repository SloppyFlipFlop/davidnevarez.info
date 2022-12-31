import React from "react";
import Image from "next/image";

class CloudAnimation extends React.Component {
  state = {
    cloudPositions: [], // an array to store the positions of each cloud
  };

  componentDidMount() {
    // create an array of cloud positions, spaced evenly across the screen
    const cloudPositions = [];

    for (let i = 0; i < this.props.numClouds; i++) {
      // start each cloud at a random position
      cloudPositions.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    this.setState({ cloudPositions });

    // start the animation loop
    this.animationFrame = requestAnimationFrame(this.animateClouds);
  }

  componentWillUnmount() {
    // cancel the animation loop when the component unmounts
    cancelAnimationFrame(this.animationFrame);
  }

  animateClouds = () => {
    const sizeArray = this.props.size;
    // update the positions of each cloud
    const newCloudPositions = this.state.cloudPositions.map((pos) => {
      pos.x -= this.props.speed;
      if (pos.x < -100) {
        pos.x = 100;
        pos.y = Math.random() * 100;
        // pick new size for the cloud
        console.log(this.props.size);
        console.log(
          "random width size:",
          this.props.size[Math.floor(Math.random() * this.props.size.length)]
            .width
        );
        // this.props.size =
        //   this.props.size[Math.floor(Math.random() * this.props.size.length)];
      }

      return pos;
    });
    this.setState({ cloudPositions: newCloudPositions });

    // request the next animation frame
    this.animationFrame = requestAnimationFrame(this.animateClouds);
  };

  render() {
    return (
      <div
        className="cloud-animation"
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          zIndex: -1,
          top: 0,
          right: 0,
        }}
      >
        {this.state.cloudPositions.map((pos, index) => (
          <Image
            key={index}
            src="/cloud.png"
            alt="cloud"
            className="cloud"
            width={this.props.size[1].width}
            height={this.props.size[1].height}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              position: "relative",
              zIndex: -3,
            }}
          />
        ))}
      </div>
    );
  }
}

export default CloudAnimation;
