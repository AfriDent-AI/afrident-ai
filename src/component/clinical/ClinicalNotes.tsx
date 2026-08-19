import { useState } from "react";
import { Clipboard, Send, Edit, Trash2, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ClinicalNotesProps {
  onChange?: (notes: string) => void;
}

export function ClinicalNotes({ onChange }: ClinicalNotesProps) {
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleSubmit = () => {
    if (notes.trim()) {
      const updatedNotes = [...savedNotes, notes.trim()];
      setSavedNotes(updatedNotes);
      setNotes(""); // Clear the input
      
      // Pass the notes to parent
      if (onChange) {
        onChange(updatedNotes.join("\n\n"));
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = savedNotes.filter((_, i) => i !== index);
    setSavedNotes(updatedNotes);
    if (onChange) {
      onChange(updatedNotes.join("\n\n"));
    }
  };

  const handleEditStart = (index: number) => {
    setEditingIndex(index);
    setEditValue(savedNotes[index]);
  };

  const handleEditCancel = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  const handleEditSave = (index: number) => {
    if (editValue.trim()) {
      const updatedNotes = [...savedNotes];
      updatedNotes[index] = editValue.trim();
      setSavedNotes(updatedNotes);
      setEditingIndex(null);
      setEditValue("");
      
      if (onChange) {
        onChange(updatedNotes.join("\n\n"));
      }
    }
  };

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (editingIndex !== null) {
        handleEditSave(editingIndex);
      }
    }
    if (e.key === 'Escape') {
      handleEditCancel();
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-[#F0EAFE]">
            <Clipboard className="size-4 text-[#9B6BEB]" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Clinical Notes
          </h2>
        </div>
        {savedNotes.length > 0 && (
          <span className="text-xs text-slate-400">
            {savedNotes.length} note{savedNotes.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Saved Notes Display */}
      {savedNotes.length > 0 && (
        <div className="mb-3 space-y-2">
          {savedNotes.map((note, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#F8FAFC] p-3 border border-slate-200 group"
            >
              {editingIndex === index ? (
                // Edit mode
                <div className="space-y-2">
                  <Textarea
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={handleEditKeyDown}
                    className="min-h-[60px] resize-none text-sm p-2"
                    autoFocus
                  />
                  <div className="flex gap-2 justify-end">
                    <Button
                      type="button"
                      onClick={handleEditCancel}
                      variant="outline"
                      size="sm"
                      className="h-7 px-3 text-xs"
                    >
                      <X className="size-3 mr-1" />
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleEditSave(index)}
                      size="sm"
                      className="h-7 px-3 text-xs bg-[#9B6BEB] hover:bg-[#8145C8] text-white"
                    >
                      <Check className="size-3 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                // View mode
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm text-slate-700 whitespace-pre-wrap">
                      {note}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Note #{index + 1}
                    </p>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      type="button"
                      onClick={() => handleEditStart(index)}
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-slate-400 hover:text-[#9B6BEB]"
                    >
                      <Edit className="size-3.5" />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleDeleteNote(index)}
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0 text-slate-400 hover:text-red-500"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="relative">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={savedNotes.length > 0 ? "Add another note..." : "Add clinical notes..."}
          className="min-h-[80px] resize-none text-sm p-3 pr-12"
        />
        
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!notes.trim()}
          className="absolute bottom-3 right-3 h-8 w-8 p-0 rounded-full bg-[#9B6BEB] hover:bg-[#8145C8] disabled:opacity-50"
        >
          <Send className="size-4 text-white" />
        </Button>
      </div>

      {/* Quick tip */}
      <div className="mt-2 text-xs text-slate-400">
        {savedNotes.length === 0 ? (
          "Press Enter to save note"
        ) : (
          <>
            {savedNotes.length} note{savedNotes.length > 1 ? 's' : ''} saved
            <span className="mx-2">•</span>
            Hover over a note to edit or delete
          </>
        )}
      </div>
    </div>
  );
}