import React, { Component } from "react";
import "./App.css";
import * as d3 from "d3"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { wordFrequency: [] };
  }
  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  getWordFrequency = (text) => {
    const stopWords = new Set(["the", "and", "a", "an", "in", "on", "at", "for", "with", "about", "as", "by", "to", "of", "from", "that", "which", "who", "whom", "this", "these", "those", "it", "its", "they", "their", "them", "we", "our", "ours", "you", "your", "yours", "he", "him", "his", "she", "her", "hers", "it", "its", "we", "us", "our", "ours", "they", "them", "theirs", "I", "me", "my", "myself", "you", "your", "yourself", "yourselves", "was", "were", "is", "am", "are", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "as", "if", "each", "how", "which", "who", "whom", "what", "this", "these", "those", "that", "with", "without", "through", "over", "under", "above", "below", "between", "among", "during", "before", "after", "until", "while", "of", "for", "on", "off", "out", "in", "into", "by", "about", "against", "with", "amongst", "throughout", "despite", "towards", "upon", "isn't", "aren't", "wasn't", "weren't", "haven't", "hasn't", "hadn't", "doesn't", "didn't", "don't", "doesn't", "didn't", "won't", "wouldn't", "can't", "couldn't", "shouldn't", "mustn't", "needn't", "daren't", "hasn't", "haven't", "hadn't"]);
    const words = text.toLowerCase().replace(/[.,/#!$%^&*;:{}=_`~()]/g, "").replace(/\s{2,}/g, " ").split(" ");
    const filteredWords = words.filter(word => !stopWords.has(word));
    return Object.entries(filteredWords.reduce((freq, word) => {
      freq[word] = (freq[word] || 0) + 1;
      return freq;
    }, {}));
  }

  renderChart() {
    const data = this.state.wordFrequency
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const svg = d3.select(".svg_parent");
    const width = 1000, height = 400;

    svg.attr("width", width).attr("height", height);

    //keep a single container group so updates can animate
    const g = svg.selectAll("g.cloud")
      .data([null])
      .join("g")
      .attr("class", "cloud")
      .attr("transform", `translate(0, ${height / 2})`);

    if (!data || data.length === 0) {
      g.selectAll("*").remove();
      return;
    }

    //layout & sizing (left-to-right, no overlap)
    const MIN_FONT = 20, MAX_FONT = 60;
    const LEFT = 30;         //where the first word starts
    const GAP = 60;          //normal spacing between later words
    const FIRST_GAP = 25;    //slightly tighter gap between "people" and "city"
    const AVG_CHAR_W = 0.6;  //rough width factor per character

    const freqExtent = d3.extent(data, d => d[1]);
    const fontSize = d3.scaleLinear()
      .domain([Math.max(1, freqExtent[0] || 1), Math.max(1, freqExtent[1] || 1)])
      .range([MIN_FONT, MAX_FONT]);

    const sizes = data.map(d => fontSize(d[1]));
    const widths = data.map((d, i) => sizes[i] * (d[0].length * AVG_CHAR_W));

    //compute x positions with a slightly smaller first gap
    const xPos = widths.reduce((acc, w, i) => {
      if (i === 0) acc.push(LEFT);
      else if (i === 1) acc.push(acc[i - 1] + widths[i - 1] + FIRST_GAP);
      else acc.push(acc[i - 1] + widths[i - 1] + GAP);
      return acc;
    }, []);

    //JOIN: this enables enter + update + exit animations
    const words = g.selectAll("text.word")
      .data(data, d => d[0]);   //key by word text

    //ENTER: start tiny then grow (size anim)
    const enter = words.enter()
      .append("text")
      .attr("class", "word")
      .attr("text-anchor", "start")
      .style("dominant-baseline", "middle")
      .style("font-family", "serif")
      .style("font-weight", 600)
      .style("opacity", 0)
      .style("font-size", "2px")
      .attr("x", (_, i) => xPos[i])
      .attr("y", 0)
      .text(d => d[0]);

    enter.transition()
      .duration(2800)
      .ease(d3.easeCubicInOut)
      .delay((_, i) => i * 250)
      .style("opacity", 1)
      .style("font-size", (_, i) => `${sizes[i]}px`);

    //UPDATE: when the textarea changes, animate position + size
    words.transition()
      .duration(2800)
      .ease(d3.easeCubicInOut)
      .attr("x", (_, i) => xPos[i])
      .style("font-size", (_, i) => `${sizes[i]}px`);

    //EXIT: fade out removed words
    words.exit()
      .transition()
      .duration(600)
      .style("opacity", 0)
      .remove();
  }





  render() {
    return (
      <div className="parent">
        <div className="child1" style={{ width: 1000 }}>
          <textarea type="text" id="input_field" style={{ height: 150, width: 1000 }} />
          <button type="submit" value="Generate Matrix" style={{ marginTop: 10, height: 40, width: 1000 }} onClick={() => {
            var input_data = document.getElementById("input_field").value
            this.setState({ wordFrequency: this.getWordFrequency(input_data) })
          }}
          > Generate WordCloud</button>
        </div>
        <div className="child2"><svg className="svg_parent"></svg></div>
      </div>
    );
  }
}

export default App;