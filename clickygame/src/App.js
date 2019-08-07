import React from "react";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron";
import images from './characters.json';
import PicsPanel from "./components/PicsPanel";


class App extends React.Component {
    state = {
        images: images,
        imageClickedId: [],
        score: 0,
        topScore: 0,
        totalScore: 0,
        message: "Click an image to begin!"
    };

    pictureRandomize = id => {
        let imageClickedId = this.state.imageClickedId;
        if (!imageClickedId.includes(id)) {
            imageClickedId.push(id);
            if (this.state.score >= this.state.totalScore) {
                this.setState({ topScore: this.state.score + 1 });
            }
            if (imageClickedId.length === 12) {
                this.setState({ imageClickedId: [] });
            }

            this.setState({
                score: imageClickedId.length,
                totalScore: this.state.topScore,
                message: "You guessed correctly!"
            });
            let i = images.length,
                j,
                temp;
            while (--i > 0) {
                j = Math.floor(Math.random() * (i + 1));
                temp = images[j];
                images[j] = images[i];
                images[i] = temp;
            }
        } else {
            this.setState({
                imageClickedId: [],
                score: 0,
                totalScore: this.state.topScore,
                message: "You guessed incorrectly!"
            });
        }
    };

    render() {
        return (
            <div>
                <Navbar
                    score={this.state.score}
                    message={this.state.message}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                <PicsPanel
                    pictureRandomized={this.pictureRandomize}
                    images={this.state.images}
                />

            </div>
        );
    }
}

export default App;