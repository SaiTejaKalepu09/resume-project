## Architecture

![image](https://github.com/user-attachments/assets/b7578d43-a3dc-4a75-aa8c-d731797fdce5)
# Cloud Resume Challenge

Welcome to my Cloud Resume Challenge project! This project demonstrates a variety of cloud and development skills by implementing a fully serverless web application. The Cloud Resume Challenge is a popular hands-on project that covers several key areas of cloud computing and web development.

## Project Overview

This project is a resume website hosted on AWS. It includes a dynamic visitor counter that updates every time someone visits the site. The project leverages multiple AWS services including S3, Lambda, API Gateway, DynamoDB, and IAM.

## Features

- **Static Website Hosting**: The resume website is hosted on an Amazon S3 bucket and delivered via Amazon CloudFront.
- **Serverless Backend**: AWS Lambda functions are used to handle the business logic for updating the visitor counter.
- **API Gateway**: An Amazon API Gateway is used to create a RESTful API for invoking the Lambda functions.
- **Database**: Amazon DynamoDB is used to store the visitor count.
- **Infrastructure as Code**: The infrastructure is managed using AWS CloudFormation or Terraform.
- **CI/CD Pipeline**: GitHub Actions is used to automate the deployment process.


## Prerequisites

Before you begin, ensure you have the following:

- An AWS account
- AWS CLI installed and configured
- Node.js and npm installed
- Git installed
- A GitHub account

## Setup and Deployment

### 1. Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/your-username/cloud-resume-challenge.git
cd cloud-resume-challenge
