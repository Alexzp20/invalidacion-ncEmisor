export const CreateJson = (document) =>{

    const nc_json = {
        "documento": {
            "tipo_dte": "05",
            "establecimiento": document.establecimiento,
            "punto_venta": document.punto_venta,
            "retener_iva": true,
            "condicion_pago": 1,
            "documentos_relacionados": [
                {
                    "tipo_documento": "03",
                    "tipo_generacion": 2,
                    "numero_documento": document.uuid,
                    "fecha_emision": document.fecha_emision.replace("/","-")
                }
            ],
            "receptor": {
                "numero_documento": "11111111111128",
                "nrc": "56106",
                "nombre": "Juan Perez",
                "codigo_actividad": "56106",
                "nombre_comercial": "Infile El Salvador",
                "direccion": {
                    "departamento": "06",
                    "municipio": "14",
                    "complemento": "Av. Manuel enrique araujo, #2343A"
                },
                "telefono": "77777777",
                "correo": "prueba@prueba.com",
                "correo_cc": "copia1@copia.com; copia2@copia.com; copia3@copia.com; copia4@copia.com; copia5@copia.com;"
            },
            "venta_tercero": null,
            "items": [
                {
                    "tipo": 1,
                    "cantidad": 20,
                    "unidad_medida": 99,
                    "descripcion": "producto 2 x 1",
                    "precio_unitario": 12,
                    "tributos": [
                        {
                        "codigo": "20",
                        "monto": 31.2
                    }
                    ],
                    "numero_documento": "75908AABE56531F38",
                    "tipo_venta": "1",
                    "codigo": "01",
                    "descuento": null
                },
                {
                    "tipo": 1,
                    "cantidad": 20,
                    "unidad_medida": 99,
                    "descripcion": "producto 2 x 1",
                    "precio_unitario": 12,
                    "tributos": [
                        {
                        "codigo": "20",
                        "monto": 31.2
                    }
                    ],
                    "numero_documento": "75908AABE56531F38",
                    "tipo_venta": "1",
                    "codigo": "01",
                    "descuento": null
                }
            ],
            "extension": {
                "nombre_entrega": "Pedro Zavaleta",
                "documento_entrega": "1234556",
                "nombre_recibe": "Receptor",
                "documento_recibe": "1233455",
                "observaciones": "este es un documento de prueba para estructura de json"
            },
            "apendice": [
                {
                    "campo": "AP1",
                    "etiqueta": "nombre_asesor",
                    "valor": "Pedro Zavaleta"
                }
            ]
        }
    }



}