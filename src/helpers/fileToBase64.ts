/**
*@fileoverview Convert a file to base64
*@version v1.0.0
*@author Angel Daniel Arredondo Castanos castanios.dev@gmail.com
*@date 12/11/2023
*/

/**
 * Convert a file to base64
 * @param {File} file - File to convert
 * @returns {Promise<string | ArrayBuffer | null>} - Promise with the base64 string
 */
export const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};