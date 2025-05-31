import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  Paper,
} from "@mui/material";

function App() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/lessons")
      .then((res) => setLessons(res.data));
  }, []);

  const toggleComplete = (id) => {
    axios.patch(`http://localhost:4000/api/lessons/${id}`).then((res) => {
      alert("Updated In Data Base");
      setLessons(lessons.map((l) => (l._id === id ? res.data : l)));
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Lesson Tracker
      </Typography>
      <List>
        {lessons.map((lesson) => (
          <Paper
            key={lesson._id}
            elevation={3}
            sx={{
              mb: 2,
              p: 2,
              backgroundColor: lesson.completed ? "#e8f5e9" : "#fff",
            }}
          >
            <ListItem
              secondaryAction={
                <Checkbox
                  edge="end"
                  checked={lesson.completed}
                  onChange={() => toggleComplete(lesson._id)}
                />
              }
            >
              <ListItemText
                primary={lesson.title}
                secondary={lesson.completed ? "Completed" : "Not Completed"}
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Container>
  );
}

export default App;
