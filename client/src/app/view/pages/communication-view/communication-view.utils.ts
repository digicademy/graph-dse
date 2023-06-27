import { IMetadata } from "src/app/models/IMetadata";
import { IParticipant, ParticipantType } from "src/app/models/IParticipant";

export class CommunicationViewUtils {
  public static getTextType(textType: string): string {
    switch (textType) {
      case "manuscript":
        return "TEXT_VIEW_PAGE_VARIANT_TYPE_MANUSCRIPT";
      case "concept":
        return "TEXT_VIEW_PAGE_VARIANT_TYPE_CONCEPT";
      case "print":
        return "TEXT_VIEW_PAGE_VARIANT_TYPE_PRINT";
      case "final_copy":
        return "TEXT_VIEW_PAGE_VARIANT_TYPE_FINAL_COPY";
      case "print-as-print":
        return "TEXT_VIEW_PAGE_VARIANT_PRINT_AS_PRINT";
      case "copy":
        return "TEXT_VIEW_PAGE_VARIANT_COPY";
      case "notExtant":
        return "TEXT_VIEW_PAGE_VARIANT_NOT_EXTANT";
      default:
        return textType ?? "";
    }
  }

  public static getLanguage(language: string): string {
    switch (language) {
      case "lat":
        return "TEXT_VIEW_PAGE_VARIANT_LANGUAGE_LATIN";
      case "fra":
        return "TEXT_VIEW_PAGE_VARIANT_LANGUAGE_FRENCH";
      case "deu":
        return "TEXT_VIEW_PAGE_VARIANT_LANGUAGE_GERMAN";
      case "ita":
        return "TEXT_VIEW_PAGE_VARIANT_LANGUAGE_ITALIAN";
      default:
        return "";
    }
  }

  public static getLocaleDateString(dateToFormat: Date): string {
    return dateToFormat.toLocaleString("de-DE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  public static getParticipantDate(participant: IParticipant): string {
    if (!participant) return "";

    const start: string = this.getLocaleDateString(new Date(participant.dateStart));
    const end: string = this.getLocaleDateString(new Date(participant.dateEnd));

    switch (participant.dateType) {
      case "range":
        return start + " - " + end;
      case "point":
        return end;
      case "imprecise":
        return start + " - " + end;
      default:
        return "";
    }
  }

  public static getSender(letter: IMetadata): IParticipant {
    return letter.participants.find((p: IParticipant) => p.type === ParticipantType.sentPerson) as IParticipant;
  }

  public static getReceiver(letter: IMetadata): IParticipant {
    return letter.participants.find((p: IParticipant) => p.type === ParticipantType.receivedPerson) as IParticipant;
  }
}
