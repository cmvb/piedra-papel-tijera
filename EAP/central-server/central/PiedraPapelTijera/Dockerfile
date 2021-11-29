# Stage 0, based on tomcat server
FROM tomcat:latest as tomcat
USER root
RUN mv /usr/local/tomcat/webapps/ /usr/local/tomcat/webapps2/
RUN mv /usr/local/tomcat/webapps.dist/ /usr/local/tomcat/webapps/
COPY tomcat-users.xml /usr/local/tomcat/conf/
COPY context.xml /usr/local/tomcat/webapps/manager/META-INF/
COPY ./target/CentralPPT.war /usr/local/tomcat/webapps/
CMD ["catalina.sh","run"]