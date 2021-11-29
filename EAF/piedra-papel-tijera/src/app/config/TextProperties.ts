import { Injectable } from '@angular/core';
import { Initializer } from './Initializer';


@Injectable()
export class TextProperties {

  constructor(public initializer: Initializer) {
  }

  getProperties(idioma) {
    let constant = this.initializer.getConst();
    return {
      // Labels Generales
      lbl_summary_info: idioma === constant.idiomaEs ? '¡Información!' : 'Info!',
      lbl_summary_success: idioma === constant.idiomaEs ? '¡Exitoso!' : 'Success!',
      lbl_summary_warning: idioma === constant.idiomaEs ? '¡Advertencia!' : 'Warning!',
      lbl_summary_danger: idioma === constant.idiomaEs ? '¡Error!' : 'Error!',
      lbl_summary_unknown_danger: idioma === constant.idiomaEs ? '¡Error Desconocido!' : 'Unknown Error!',
      lbl_detail_fue: idioma === constant.idiomaEs ? ' fue ' : ' has ',
      lbl_detail_el_registro: idioma === constant.idiomaEs ? 'El elemento #' : 'The element #',
      lbl_detail_el_registro_eliminado: idioma === constant.idiomaEs ? 'El elemento fue eliminado satisfactoriamente.' : 'The element was deleted successfully.',
      lbl_detail_creado: idioma === constant.idiomaEs ? 'creado' : 'created',
      lbl_detail_actualizado: idioma === constant.idiomaEs ? 'actualizado' : 'updated',
      lbl_detail_satisfactoriamente: idioma === constant.idiomaEs ? ' satisfactoriamente.' : ' successfully.',
    
      // Acciones
      lbl_btn_ingresar: idioma === constant.idiomaEs ? 'Ingresar' : 'Sign In',
      lbl_btn_registrarse: idioma === constant.idiomaEs ? 'Registrarse' : 'Register',
      lbl_btn_reset_password: idioma === constant.idiomaEs ? 'Reestablecer Contraseña' : 'Reset Password',
      lbl_btn_inicio: idioma === constant.idiomaEs ? 'Inicio' : 'Login',
      lbl_btn_buscar: idioma === constant.idiomaEs ? 'Buscar' : 'Search',
      lbl_btn_consultar: idioma === constant.idiomaEs ? 'Consultar' : 'Query',
      lbl_btn_crear: idioma === constant.idiomaEs ? 'Crear' : 'Create',
      lbl_btn_eliminar: idioma === constant.idiomaEs ? 'Eliminar' : 'Delete',
      lbl_btn_editar: idioma === constant.idiomaEs ? 'Editar' : 'Edit',
      lbl_btn_limpiar: idioma === constant.idiomaEs ? 'Limpiar' : 'Clean',
      lbl_btn_atras: idioma === constant.idiomaEs ? 'Atrás' : 'Back',
      lbl_btn_masivo: idioma === constant.idiomaEs ? 'Masivo' : 'Masive',
      lbl_btn_exportar: idioma === constant.idiomaEs ? 'Exportar' : 'Export',
      lbl_btn_importar: idioma === constant.idiomaEs ? 'Importar' : 'Import',
      lbl_btn_actualizar: idioma === constant.idiomaEs ? 'Actualizar' : 'Update',
      lbl_btn_guardar: idioma === constant.idiomaEs ? 'Guardar' : 'Save',
      lbl_btn_ite_remover: idioma === constant.idiomaEs ? 'Remover' : 'Remove',
      lbl_btn_ite_agregar: idioma === constant.idiomaEs ? 'Agregar' : 'Add',
      lbl_btn_siguiente: idioma === constant.idiomaEs ? 'Siguiente' : 'Next',
      lbl_btn_anterior: idioma === constant.idiomaEs ? 'Anterior' : 'Back',
      lbl_btn_cancelar: idioma === constant.idiomaEs ? 'Cancelar' : 'Cancel',
      lbl_btn_subir: idioma === constant.idiomaEs ? 'Subir' : 'Upload',
      lbl_btn_escoger: idioma === constant.idiomaEs ? 'Escoger' : 'Choose',
      lbl_btn_escoger_archivo: idioma === constant.idiomaEs ? 'Escoger Archivo' : 'Choose File',
      lbl_subir_archivos: idioma === constant.idiomaEs ? 'Subir Archivos' : 'Upload Files',

      // Tooltips
      lbl_tip_cerrar_sesion: idioma === constant.idiomaEs ? 'Cerrar Sesión' : 'End Session',
      lbl_tip_agregar: idioma === constant.idiomaEs ? '[Clic] para agregar un nuevo registro' : 'Click to add a new register',
      lbl_tip_editar: idioma === constant.idiomaEs ? '[Clic] para editar registro' : 'Click to edit the register selected',
      lbl_tip_eliminar: idioma === constant.idiomaEs ? '[Clic] para eliminar registro' : 'Click to delete the register selected',
      lbl_tip_buscar: idioma === constant.idiomaEs ? '[Clic] para buscar registros' : 'Click to search registers',
      lbl_tip_limpiar: idioma === constant.idiomaEs ? '[Clic] para limpiar' : 'Click to clean',
      lbl_tip_anterior: idioma === constant.idiomaEs ? '[Clic] para regresar' : 'Click to go back',
      lbl_tip_actualizar: idioma === constant.idiomaEs ? '[Clic] para actualizar' : 'Click to update',
      lbl_tip_guardar: idioma === constant.idiomaEs ? '[Clic] para guardar' : 'Click to save',
      lbl_tip_exportar_datos: idioma === constant.idiomaEs ? '[Clic] para exportar' : 'Click to export',
      lbl_tip_subir_archivos: idioma === constant.idiomaEs ? '[Clic] para subir archivos' : 'Click to upload files',
      lbl_tip_eliminar_archivo: idioma === constant.idiomaEs ? '[Clic] para eliminar archivo' : 'Click to delete file',
      lbl_tip_mostrar_ocultar_archivos: idioma === constant.idiomaEs ? '[Clic] para mostrar/ocultar archivos' : 'Click to show/hide files',

      //Enums
      lbl_enum_generico_valor_vacio: idioma === constant.idiomaEs ? 'Selecciona una opción' : 'Select a Item',

      lbl_enum_si: idioma === constant.idiomaEs ? 'Si' : 'Yes',
      lbl_enum_no: idioma === constant.idiomaEs ? 'No' : 'No',

      lbl_enum_idioma_es: idioma === constant.idiomaEs ? 'Español' : 'Spanish',
      lbl_enum_idioma_en: idioma === constant.idiomaEs ? 'Inglés' : 'English',

      lbl_enum_piedra: idioma === constant.idiomaEs ? 'Piedra' : 'Rock',
      lbl_enum_papel: idioma === constant.idiomaEs ? 'Papel' : 'Paper',
      lbl_enum_tijera: idioma === constant.idiomaEs ? 'Tijera' : 'Scissor',
    }
  };
}