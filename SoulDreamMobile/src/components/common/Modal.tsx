import React from 'react';
import {
  Modal as RNModal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  ModalProps as RNModalProps,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme, Theme } from '../../contexts/ThemeContext';
import Icon from './Icon'; // Usaremos nuestro componente Icon

interface ModalProps extends Omit<RNModalProps, 'visible' | 'animationType'> {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>; // Estilo para el contenedor del contenido del modal
  animationType?: 'none' | 'slide' | 'fade';
  hideCloseButton?: boolean;
  closeOnBackdropPress?: boolean; // Nueva prop para cerrar al tocar el fondo
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  title,
  style,
  animationType = 'fade',
  hideCloseButton = false,
  closeOnBackdropPress = true, // Por defecto, permitir cerrar tocando el fondo
  ...restOfProps
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const handleBackdropPress = () => {
    if (closeOnBackdropPress) {
      onClose();
    }
  };

  return (
    <RNModal
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Para el botón "atrás" de Android
      animationType={animationType}
      {...restOfProps}
    >
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback> {/* Evita que el toque en el contenido cierre el modal si closeOnBackdropPress es true*/}
            <View style={[styles.modalContainer, style]}>
              {(title || !hideCloseButton) && (
                <View style={styles.header}>
                  {title && <Text style={styles.titleText}>{title}</Text>}
                  {!hideCloseButton && (
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                      <Icon family="Ionicons" name="close" size={24} color={theme.colors.textSecondary} />
                    </TouchableOpacity>
                  )}
                </View>
              )}
              <View style={styles.contentContainer}>{children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.medium, // Espacio alrededor del modal
    },
    modalContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shapes.borderRadiusLarge, // Un poco más grande que el card normal
      padding: theme.spacing.large, // Padding interno generoso
      width: '90%', // Ancho del modal, ajustable
      maxWidth: 500, // Ancho máximo
      shadowColor: theme.effects.shadowColor,
      shadowOffset: theme.effects.shadowOffset,
      shadowOpacity: theme.effects.shadowOpacity * 1.5, // Sombra un poco más pronunciada
      shadowRadius: theme.effects.shadowRadius * 1.5,
      elevation: theme.effects.elevation * 1.5, // Elevación un poco más pronunciada
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.medium,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      paddingBottom: theme.spacing.small,
    },
    titleText: {
      fontSize: theme.typography.fontSizes.large,
      fontWeight: theme.typography.weights.semiBold,
      color: theme.colors.textPrimary,
      flex: 1, // Para que el título ocupe el espacio disponible
    },
    closeButton: {
      padding: theme.spacing.extraSmall,
      marginLeft: theme.spacing.small, // Espacio si hay título
    },
    contentContainer: {
      // El contenido se coloca aquí
    },
  });

export default Modal; 