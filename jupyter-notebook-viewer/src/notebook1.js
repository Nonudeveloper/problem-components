import React from "react";
import { render } from "react-dom";
import Jupyter from "@kyso/react-jupyter";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
class Jups1 extends React.Component{
  render() {
  return(<Jupyter
  content={{
    "cells": [
      {
        "cell_type": "code",
        "execution_count": null,
        "metadata": {
          "collapsed": false
        },
        "outputs": [],
        "source": [
          "%matplotlib inline"
        ]
      },
      {
        "cell_type": "markdown",
        "metadata": {},
        "source": [
          "\n# Pyplot Formatstr\n\n\n\n"
        ]
      },
      {
        "cell_type": "code",
        "execution_count": null,
        "metadata": {
          "collapsed": false
        },
        "outputs": [],
        "source": [
          "import matplotlib.pyplot as plt\nplt.plot([1,2,3,4], [1,4,9,16], 'ro')\nplt.axis([0, 6, 0, 20])\nplt.show()"
        ]
      }
    ],
    "metadata": {
      "kernelspec": {
        "display_name": "Python 3",
        "language": "python",
        "name": "python3"
      },
      "language_info": {
        "codemirror_mode": {
          "name": "ipython",
          "version": 3
        },
        "file_extension": ".py",
        "mimetype": "text/x-python",
        "name": "python",
        "nbconvert_exporter": "python",
        "pygments_lexer": "ipython3",
        "version": "3.6.5"
      }
    },
    "nbformat": 4,
    "nbformat_minor": 0
  }}
  showCode={true} // optional
  showOutput={true}
  />
  )}
}
render(<Jups1/>,
  document.getElementById("root")
);
export default Jups1;
