import React from "react";
import cppImg from "../assets/cpp.png";
import pythonImg from "../assets/python.png";
import golangImg from "../assets/golang.png";
import rustImg from "../assets/rust.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";
import vue from "../assets/vuejs.png";
import android from "../assets/android.png";
import swift from "../assets/swift.png";
import wordpress from "../assets/wordpress.png";
import magento from "../assets/magento.png";
import laravel from "../assets/laravel.png";
import codeigniter from "../assets/codeigniter.png";
import django from "../assets/codeigniter.png";
import solidity from "../assets/solidity.png";
import flutter from "../assets/flutter.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import graphql from "../assets/graphql.png";
import docker from "../assets/docker.png";
import nginx from "../assets/nginx.png";
import ubuntu from "../assets/ubuntu.png";
import tensorflow from "../assets/tensorflow.png";
import keras from "../assets/keras.png";
import opencv from "../assets/opencv.png";
import arduino from "../assets/arduino.png";
import ros from "../assets/ros.png";
import TechStackCard from "./TechStackCard";

const TechStackBody = () => {
  const techStack = [
    { imageSrc: cppImg, techName: "C++" },
    { imageSrc: pythonImg, techName: "Python" },
    { imageSrc: golangImg, techName: "Golang" },
    { imageSrc: rustImg, techName: "Rust" },
    { imageSrc: nodejs, techName: "Nodejs" },
    { imageSrc: react, techName: "Reactjs" },
    { imageSrc: angular, techName: "Angular" },
    { imageSrc: vue, techName: "Vuejs" },
    { imageSrc: android, techName: "Android" },
    { imageSrc: swift, techName: "Swift" },
    { imageSrc: wordpress, techName: "Wordpress" },
    { imageSrc: magento, techName: "Magento" },
    { imageSrc: laravel, techName: "Laravel" },
    { imageSrc: codeigniter, techName: "Codeigniter" },
    { imageSrc: django, techName: "Django" },
    { imageSrc: solidity, techName: "Solidity" },
    { imageSrc: flutter, techName: "Flutter" },
    { imageSrc: mysql, techName: "MySQL" },
    { imageSrc: mongodb, techName: "MongoDB" },
    { imageSrc: graphql, techName: "GraphQL" },
    { imageSrc: docker, techName: "Docker" },
    { imageSrc: nginx, techName: "Nginx" },
    { imageSrc: ubuntu, techName: "Ubuntu" },
    { imageSrc: tensorflow, techName: "Tensorflow" },
    { imageSrc: keras, techName: "Keras" },
    { imageSrc: opencv, techName: "OpenCV" },
    { imageSrc: arduino, techName: "Arduino" },
    { imageSrc: ros, techName: "ROS" },
  ];

  return (
    <div className="techStackBody">
      {techStack.map((techStack, index) => (
        <TechStackCard
          key={index}
          imageSrc={techStack.imageSrc}
          techStackName={techStack.techName}
        />
      ))}
    </div>
  );
};

export default TechStackBody;
