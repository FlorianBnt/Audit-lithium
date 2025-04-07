import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from 'lucide-react';

const checklistPoints = [
  "Stockage dans contenants résistants au feu et adaptés",
  "Séparation des batteries endommagées",
  "Utilisation de vermiculite (méthode Lasagna)",
  "Stockage extérieur, sous abri et à distance des bâtiments",
  "Étiquetage conforme ADR des contenants",
  "Surveillance 24h/24 de la zone de stockage",
  "Disponibilité d’extincteurs spécifiques lithium",
  "Limitation des quantités stockées à la capacité journalière",
  "Transfert des batteries en fin de journée",
  "Supervision des opérations de déchargement",
  "Absence de dumping pour les DEEE contenant du lithium",
  "Retrait sans endommagement ni court-circuit",
  "Absence de batteries mal stockées dans la ligne de traitement",
  "Stockage sécurisé des composants dangereux",
  "Présence de signalétique de sécurité conforme"
];

export default function AuditFormLithium() {
  const [responses, setResponses] = useState({});
  const [notes, setNotes] = useState({});
  const [photos, setPhotos] = useState({});
  const [audioNotes, setAudioNotes] = useState({});

  const handleChange = (point, value) => {
    setResponses({ ...responses, [point]: value });
  };

  const handleNoteChange = (point, value) => {
    setNotes({ ...notes, [point]: value });
  };

  const handlePhotoUpload = (point, file) => {
    setPhotos({ ...photos, [point]: file.name });
  };

  const handleAudioNote = (point, value) => {
    setAudioNotes({ ...audioNotes, [point]: value });
  };

  return (
    <div className="p-4 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center">Audit DEEE - Risque Lithium</h1>
      {checklistPoints.map((point, idx) => (
        <Card key={idx} className="rounded-2xl shadow-md">
          <CardContent className="space-y-3 p-4">
            <p className="text-lg font-semibold">{point}</p>
            <Select onValueChange={(value) => handleChange(point, value)}>
              <SelectTrigger className="w-full rounded-xl border border-gray-300">
                <SelectValue placeholder="Sélectionner un statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Conforme">Conforme</SelectItem>
                <SelectItem value="Non conforme">Non conforme</SelectItem>
                <SelectItem value="Non applicable">Non applicable</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Notes complémentaires..."
              className="rounded-xl"
              onChange={(e) => handleNoteChange(point, e.target.value)}
            />
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <Upload className="w-5 h-5" />
                <span>Ajouter une photo</span>
                <Input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handlePhotoUpload(point, e.target.files[0])}
                />
              </label>
              <Input
                placeholder="Note vocale (texte converti)"
                className="rounded-xl"
                onChange={(e) => handleAudioNote(point, e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      ))}
      <Button className="w-full text-lg py-6 rounded-2xl">Exporter en Excel</Button>
    </div>
  );
}