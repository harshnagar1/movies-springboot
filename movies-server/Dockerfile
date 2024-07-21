# Stage 1: Build
FROM maven:3.9.8-eclipse-temurin-22-alpine AS build

# Set the working directory
WORKDIR /app

# Copy Maven project files
COPY pom.xml .
COPY src ./src

# Build the project using Maven
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM openjdk:24-slim-bullseye

# Expose the application port
EXPOSE 8080

# Copy the built JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Set the command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
