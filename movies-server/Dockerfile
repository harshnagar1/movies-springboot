# Stage 1: Build
FROM ubuntu:latest AS build

# Update and install OpenJDK 17
RUN apt-get update && apt-get install -y openjdk-17-jdk maven

# Set the working directory
WORKDIR /app

# Copy the Maven project files
COPY . .

# Build the project using Maven
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM openjdk:17-jdk-slim

# Expose the application port
EXPOSE 8080

# Copy the built JAR file from the build stage
COPY --from=build /app/target/demo-1.jar app.jar

# Set the command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
