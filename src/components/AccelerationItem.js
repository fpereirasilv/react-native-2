import React from "react";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import styles from "../../styles";

export default function AccelerationItem({ item }) {
  const items = { ...item };

  return (
    <View style={styles.containerMaster}>
      <View
        style={[styles.containerSocialMedia, { opacity: 1 }]}
        className={"contact-content"}
      >
        <Text style={styles.textMediaSocial} className={"contact-label"}>
          Linkedin:
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-value"}>
          {items.linkedin}
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-label"}>
          Github:
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-value"}>
          {items.github}
        </Text>
      </View>

      <View
        style={[styles.containerDados, { opacity: 1 }]}
        className={"contact-content"}
      >
        <Text style={styles.textMediaSocial} className={"contact-label"}>
          E-mail:
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-value"}>
          {items.email}
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-label"}>
          Celular:
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-value"}>
          {items.phone}
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-label"}>
          Data de Nascimento:
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-value"}>
          {moment(new Date(items.birthday)).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-label"}>
          Sexo:
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-value"}>
          {(items.gender = 1 ? "Masculino" : "Feminino")}
        </Text>
        <Text style={styles.textMediaSocial} className={"contact-label"}>
          Idiomas:
        </Text>
        <View style={styles.containerTextIdiomas}>
          <Text style={styles.textIdiomas} className={"contact-language"}>
            {items.language[0]}
          </Text>
          <Text style={styles.textIdiomas} className={"contact-language"}>
            {items.language[1]}
          </Text>
          <Text style={styles.textIdiomas} className={"contact-language"}>
            {items.language[2]}
          </Text>
        </View>
      </View>
    </View>
  );
}
